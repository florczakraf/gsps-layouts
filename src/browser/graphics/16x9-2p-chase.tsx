import { render } from '../render';
import layoutBg from './img/layouts/16x9-2p.png';
import layoutBgWithDonationBar from './img/layouts/16x9-2p-nocam-donationbar.png';
import styled from 'styled-components';
import RunInfo from './components/run-info';
import Timer from './components/timer';
import MediaBox from './components/media-box';
import Nameplate from './components/nameplate';
import Reader from './components/reader';
import Commentators from './components/commentators';
import { useReplicant } from 'use-nodecg';
import {
  RunDataActiveRun,
  Timer as TimerType,
} from '../../../../nodecg-speedcontrol/src/types/schemas';
import { Fragment, useEffect, useState } from 'react';
import ThemeProvider from './components/theme-provider';
import DonationBar from './components/donation-bar';
import FinishTime from './components/finish-time';
import { GenericReplicant } from 'src/types/custom/genericReplicant';
import { AutoTextSize } from 'auto-text-size';

const LayoutContainer = styled.div<{ showDonationBar: boolean }>`
  width: 1920px;
  height: 1030px;
  background-image: url(${(props) => (props.showDonationBar ? layoutBgWithDonationBar : layoutBg)});
  margin: 0;
  padding: 0;
  text-align: center;
`;

const BottomLeft = styled.div<{ showDonationBar: boolean }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0px;
  top: 543px;
  width: 654px;
  height: ${(props) => (props.showDonationBar ? '423px' : '453px')};
  justify-content: space-between;
`;

const BottomMiddle = styled.div<{ showDonationBar: boolean }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 658px;
  top: 543px;
  width: 603px;
  height: ${(props) => (props.showDonationBar ? '443px' : '483px')};
`;

const BottomRight = styled.div<{ showDonationBar: boolean }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 1266px;
  top: 543px;
  width: 654px;
  height: ${(props) => (props.showDonationBar ? '443px' : '483px')};
`;

const PaddedDiv = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const CenteredDiv = styled.div`
  text-align: center;
`;

const MonospaceDiv = styled.div`
  font-variant-numeric: tabular-nums;
  font-size: 2.125rem;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
`;

const FlexJustifyDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const Accented = styled.span`
  color: #ffbd16;
`;

const Names = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
`;

const Donations = styled.div`
  position: fixed;
  width: 1920px;
  height: 44px;
  bottom: 0px;
`;

const Team1FinishTime = styled.div`
  position: fixed;
  top: 543px;
  left: 654px;
`;

const Team2FinishTime = styled.div`
  position: fixed;
  top: 543px;
  right: 654px;
`;

export const App = () => {
  const [activeRun] = useReplicant<RunDataActiveRun | undefined>('runDataActiveRun', undefined, {
    namespace: 'nodecg-speedcontrol',
  });
  const [showDonationBar] = useReplicant<boolean>('showDonationBar', true);
  const [genericReplicant] = useReplicant<GenericReplicant>('genericReplicant', {});
  const [timer] = useReplicant<TimerType | undefined>('timer', undefined, {
    namespace: 'nodecg-speedcontrol',
  });
  const [placements, setPlacements] = useState<
    {
      place: number;
      placementData: [
        string,
        {
          time: string;
          state: 'forfeit' | 'completed';
          milliseconds: number;
          timestamp: number;
        }
      ];
    }[]
  >([]);

  function team1Placement() {
    let place = 1;
    if (placements.length > 0) {
      placements.forEach((placement) => {
        if (placement.placementData[0] === activeRun!.teams[0]!.id) {
          place = placement.place;
        }
      });
    }
    return place;
  }

  function team2Placement() {
    let place = 1;
    if (placements.length > 0) {
      placements.forEach((placement) => {
        if (placement.placementData[0] === activeRun!.teams[1]!.id) {
          place = placement.place;
        }
      });
    }
    return place;
  }

  useEffect(() => {
    if (typeof timer === 'undefined') return;

    setPlacements(
      Object.entries(timer.teamFinishTimes)
        .sort(([, a], [, b]) => a.milliseconds - b.milliseconds)
        .map((p, i) => ({ place: i + 1, placementData: p }))
    );
  }, [timer]);

  return (
    <ThemeProvider>
      <LayoutContainer showDonationBar={showDonationBar}>
        <BottomLeft showDonationBar={showDonationBar}>
          <Names>
            {activeRun && (
              <>
                {activeRun.teams[0] && (
                  <>
                    {activeRun.teams.length === 1 ? (
                      <>
                        {activeRun.teams.map((team) => {
                          return (
                            <Fragment key={team.id}>
                              {team.players.map((player, index) => {
                                if (index % 2 == 0) {
                                  return <Nameplate key={player.name} player={player} />;
                                } else {
                                  return <></>;
                                }
                              })}
                            </Fragment>
                          );
                        })}
                        {activeRun.teams[0].players.length < 5 && <Commentators />}
                      </>
                    ) : (
                      <>
                        {activeRun.teams[0].players.map((player) => {
                          return (
                            <Fragment key={player.id}>
                              <Nameplate key={player.name} player={player} />
                            </Fragment>
                          );
                        })}
                        {activeRun.teams[0].players.length < 5 && <Commentators />}
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </Names>

          <RunInfo fontSize={48} />
          <Timer fontSize={80} />
        </BottomLeft>
        <BottomMiddle showDonationBar={showDonationBar}>
          <PaddedDiv>
            <CenteredDiv></CenteredDiv>
            <FlexJustifyDiv>
              <MonospaceDiv>{genericReplicant['P1Score']}</MonospaceDiv>
              <MonospaceDiv>
                <Accented>PUNKTY</Accented>
              </MonospaceDiv>
              <MonospaceDiv>{genericReplicant['P2Score']}</MonospaceDiv>
            </FlexJustifyDiv>
            <br></br>
            <FlexJustifyDiv>
              <MonospaceDiv>{genericReplicant['TimerP1']}</MonospaceDiv>
              <MonospaceDiv>
                <Accented>CZAS</Accented>
              </MonospaceDiv>
              <MonospaceDiv>{genericReplicant['TimerP2']}</MonospaceDiv>
            </FlexJustifyDiv>
            <br></br>
            {genericReplicant['SongTitle'] && genericReplicant['SongAlbum'] && (
              <>
                <div style={{ fontSize: '2.125rem' }}>
                  <Accented>ODPOWIEDŹ</Accented>
                </div>
                <CenteredDiv>
                  <AutoTextSize
                    style={{ marginLeft: 'auto', marginRight: 'auto' }}
                    maxFontSizePx={80}
                    mode="box">
                    {genericReplicant['SongTitle']}
                  </AutoTextSize>
                </CenteredDiv>
                <CenteredDiv>
                  <AutoTextSize
                    style={{ marginLeft: 'auto', marginRight: 'auto', fontWeight: 500 }}
                    maxFontSizePx={40}
                    mode="box">
                    {genericReplicant['SongAlbum']}
                  </AutoTextSize>
                </CenteredDiv>
              </>
            )}
          </PaddedDiv>
        </BottomMiddle>
        <BottomRight showDonationBar={showDonationBar}>
          <Names>
            {activeRun && (
              <>
                {activeRun.teams[1] ? (
                  <>
                    {activeRun.teams[1].players.map((player) => {
                      return (
                        <Fragment key={player.id}>
                          <Nameplate key={player.name} player={player} />
                        </Fragment>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <>
                      {activeRun.teams.map((team) => {
                        return (
                          <Fragment key={team.id}>
                            {team.players.map((player, index) => {
                              if (index % 2 != 0) {
                                return <Nameplate key={player.name} player={player} />;
                              } else {
                                return <></>;
                              }
                            })}
                          </Fragment>
                        );
                      })}
                    </>
                  </>
                )}
              </>
            )}
            <Reader />
          </Names>
          <MediaBox />
        </BottomRight>
        {activeRun &&
          timer &&
          activeRun.teams[0] &&
          activeRun.teams.length > 1 &&
          timer.teamFinishTimes[activeRun.teams[0].id] != undefined &&
          timer.teamFinishTimes[activeRun.teams[0].id]!.state === 'completed' && (
            <Team1FinishTime>
              <FinishTime
                side="left"
                place={team1Placement()}
                time={timer.teamFinishTimes[activeRun.teams[0].id]!.time}
              />
            </Team1FinishTime>
          )}
        {activeRun &&
          timer &&
          activeRun.teams[1] &&
          timer.teamFinishTimes[activeRun.teams[1].id] != undefined &&
          timer.teamFinishTimes[activeRun.teams[1].id]!.state === 'completed' && (
            <Team2FinishTime>
              <FinishTime
                side="right"
                place={team2Placement()}
                time={timer.teamFinishTimes[activeRun.teams[1].id]!.time}
              />
            </Team2FinishTime>
          )}
        {showDonationBar && (
          <Donations>
            <DonationBar />
          </Donations>
        )}
      </LayoutContainer>
    </ThemeProvider>
  );
};

render(<App />);
