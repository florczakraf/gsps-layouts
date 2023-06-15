import { NodeCG } from './util/nodecg';
import { Milestones, RawMilestone } from '../types/custom';
import needle from 'needle';
import { TaggedLogger } from './util/tagged-logger';

/** Code relating to milestones. */
export const milestones = (nodecg: NodeCG) => {
  const milestonesReplicant = nodecg.Replicant('milestones');
  const config = nodecg.bundleConfig.milestones;
  const log = new TaggedLogger('milestones');
  let refreshTimeout: NodeJS.Timeout;

  async function updateMilestones() {
    nodecg.sendMessage('milestones:updating');
    clearTimeout(refreshTimeout);
    try {
      const raw = await needle('get', config.url!);
      const milestones = processMilestones(raw.body);
      milestonesReplicant.value = milestones;
      nodecg.sendMessage('milestones:updated');
      refreshTimeout = setTimeout(updateMilestones, 60 * 1000);
    } catch (err) {
      log.error(`Błąd przy pobieraniu milestonów: ${err}`);
    }
  }

  function processMilestones(milestones: RawMilestone[]): Milestones {
    const sorted = milestones
      .sort((a: RawMilestone, b: RawMilestone) => {
        return a.Kwota - b.Kwota;
      })
      .map((milestone) => ({
        name: milestone.Nazwa,
        amount: milestone.Kwota,
      }));
    return sorted;
  }

  if (config.enabled) {
    updateMilestones();
    refreshTimeout = setTimeout(updateMilestones, 60 * 1000);
  }

  nodecg.listenFor('updateMilestones', updateMilestones);
};
