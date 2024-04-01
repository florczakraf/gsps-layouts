import { render } from '../render';
import layoutBg from './img/layouts/4x3-2p.png';
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
import FinishTime from './components/finish-time';

const LayoutContainer = styled.div`
  width: 1920px;
  height: 1030px;
  background-image: url(${layoutBg});
  margin: 0;
  padding: 0;
  text-align: center;
`;

const BottomLeft = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0px;
  top: 722px;
  width: 958px;
  height: 294px;
  justify-content: space-between;
`;

const BottomRight = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 962px;
  top: 722px;
  width: 958px;
  height: 304px;
`;

const Names = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
`;

const Team1FinishTime = styled.div`
  position: fixed;
  top: 722px;
  left: 679px;
`;

const Team2FinishTime = styled.div`
  position: fixed;
  top: 722px;
  right: 679px;
`;

export const App = () => {
  const [activeRun] = useReplicant<RunDataActiveRun | undefined>('runDataActiveRun', undefined, {
    namespace: 'nodecg-speedcontrol',
  });
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
      <LayoutContainer>
        <BottomLeft>
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

          <RunInfo fontSize={44} />
          <Timer fontSize={56} />
        </BottomLeft>
        <BottomRight>
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
      </LayoutContainer>
    </ThemeProvider>
  );
};

render(<App />);
