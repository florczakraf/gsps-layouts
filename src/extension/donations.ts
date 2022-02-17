import needle from 'needle';
import type { NeedleResponse } from 'needle';
import { get as nodecg } from './util/nodecg';
import type { NodeCG } from 'nodecg/types/server';
import type { Configschema } from '@gsps-layouts/types/schemas/configschema';
import type { Tracker } from '@gsps-layouts/types';
import { donationsToReadReplicant } from './util/replicants';

const LOGIN_URL = 'https://gsps.pl/donacje/admin/login/';
const loginLog = new (nodecg() as NodeCG).Logger(
  `${nodecg().bundleName}:tracker`
);
const config = (nodecg().bundleConfig as Configschema).tracker;
let isFirstLogin = true;
let cookies: NeedleResponse['cookies'];
const refreshTime = 10 * 1000; // Odśwież donacje co 10 sekund.
let updateTimeout: NodeJS.Timeout;

async function loginToTracker(): Promise<void> {
  if (isFirstLogin) loginLog.info(`Loguję się jako ${config!.username}`);
  else loginLog.info(`Odświeżam sesję jako ${config!.username}`);

  try {
    const resp1 = await needle('get', LOGIN_URL);
    if (resp1.statusCode !== 200) {
      throw new Error('Brak dostępu do strony logowania trackera');
    }

    const resp2 = await needle(
      'post',
      LOGIN_URL,
      {
        username: config!.username,
        password: config!.password,
        csrfmiddlewaretoken: resp1.cookies
          ? resp1.cookies.csrftoken
          : undefined,
      },
      {
        cookies: resp1.cookies,
        headers: {
          referer: LOGIN_URL,
        },
      }
    );

    if (
      resp2.statusCode !== 302 ||
      (resp2.cookies && !resp2.cookies.tracker_session)
    ) {
      throw new Error(
        'Zalogowanie się nie powiodło, czy użytkownik/hasło są poprawne?'
      );
    }

    cookies = resp2.cookies;

    if (isFirstLogin) {
      isFirstLogin = false;
      loginLog.info(`Zalogowano pomyślnie jako ${config!.username}`);
    } else {
      loginLog.info(`Odświeżono sesję jako ${config!.username}`);
    }

    setTimeout(loginToTracker, 90 * 60 * 1000);
  } catch (err) {
    loginLog.warn('Błąd przy logowaniu! ', err);
    if (!isFirstLogin) {
      setTimeout(loginToTracker, 60 * 1000);
    } else {
      throw new Error('Nie udało się zalogować do trackera.');
    }
  }
}

function processToReadDonations(
  donations: Tracker.Donation[]
): Tracker.FormattedDonation[] {
  return donations
    .map((donation) => ({
      id: donation.pk,
      name: donation.fields.donor__public,
      amount: parseFloat(donation.fields.amount),
      comment:
        donation.fields.commentstate === 'APPROVED'
          ? donation.fields.comment
          : undefined,
      timestamp: Date.parse(donation.fields.timereceived),
    }))
    .sort((a, b) => {
      if (a.timestamp < b.timestamp) {
        return -1;
      }
      if (a.timestamp > b.timestamp) {
        return 1;
      }
      return 0;
    });
}

async function updateToReadDonations() {
  clearTimeout(updateTimeout);
  nodecg().sendMessage('donationsToRead:updating');
  try {
    const resp = await needle(
      'get',
      `https://gsps.pl/donacje/search?event=${
        config!.eventID
      }&type=donation&feed=toread`,
      {
        cookies: cookies,
      }
    );
    const currentDonations = processToReadDonations(resp.body);
    const donationBids = await getDonationBids();
    for (let i = 0; i < currentDonations.length; i++) {
      const donationBid = donationBids
        .filter(
          (e: Tracker.DonationBid) =>
            e.fields.donation === currentDonations[i].id
        )
        .map((donation) => ({
          id: donation.fields.bid,
          amount: parseFloat(donation.fields.amount),
        }));
      let donation = currentDonations[i];

      donation.bid = donationBid;
    }
    donationsToReadReplicant.value = currentDonations;
    nodecg().sendMessage('donationsToRead:updated');
  } catch (err) {
    loginLog.warn('Błąd przy aktualizowaniu donacji do przeczytania:', err);
    donationsToReadReplicant.value.length = 0; // Wyczyść dane na wszelki wypadek
    nodecg().sendMessage('donationsToRead:updated');
  }
  updateTimeout = setTimeout(updateToReadDonations, refreshTime);
}

async function getDonationBids(): Promise<Tracker.DonationBid[]> {
  try {
    const resp = await needle(
      'get',
      `https://gsps.pl/donacje/search?event=${
        config!.eventID
      }&type=donationbid`,
      {
        cookies: cookies,
      }
    );
    return resp.body;
  } catch (err) {
    loginLog.warn(
      'Błąd przy aktualizowaniu licytacji na którę poszły donację:',
      err
    );
    return [];
  }
}

loginToTracker().then(() => {
  updateToReadDonations();
});

nodecg().listenFor('updateDonations', updateToReadDonations);