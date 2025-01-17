import { render } from '../render';
import gspsLogo from './img/logo_gsps_2023.png';
import mainBg from './img/gradient_transparent.png';
import styled from 'styled-components';
import { IoIosMusicalNotes } from 'react-icons/io';
import { IconContext } from 'react-icons';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { useRef } from 'react';
import { useReplicant } from 'use-nodecg';
import { Countdown, CountdownRunning, Song } from 'src/types/generated';
import ThemeProvider from './components/theme-provider';

const LayoutContainer = styled.div`
  width: 1920px;
  height: 1030px;
  background-image: url(${mainBg});
  margin: 0;
  padding: 0;
`;

const LogoDiv = styled.div`
  position: fixed;
  top: 250px;
  width: 1920px;
  height: 500px;
  text-align: center;
`;

const CountdownDiv = styled.div`
  font-size: 96px;
  width: 100%;
  text-align: center;
  position: fixed;
  top: 750px;
  font-variant-numeric: tabular-nums;
`;

const Logo = styled.img`
  height: 45%;
`;

const SongDiv = styled.div`
  display: flex;
  position: fixed;
  top: 80px;
  background: #e6e6e6;
  height: 32px;
  color: rgb(60, 60, 60);
  width: 25%;
  flex-direction: row;
  gap: 8px;
  font-size: 20px;
  border-radius: 0px 7px 7px 0px;
  align-content: space-between;
  justify-content: space-between;
`;

const SongName = styled.div`
  width: 100%;
  margin-top: -10px;
`;

export const Odliczanie = () => {
  const [countdown] = useReplicant<Countdown | undefined>('countdown', undefined);
  const [countdownRunning] = useReplicant<CountdownRunning>('countdownRunning', false);
  const [song] = useReplicant<Song>('song', '');
  const songRef = useRef(null);
  const countdownRef = useRef(null);

  return (
    <ThemeProvider>
      <LayoutContainer>
        <LogoDiv>
          <Logo src={gspsLogo} />
        </LogoDiv>
        <CountdownDiv ref={countdownRef}>
          {countdown && countdownRunning && <span className="shadow">{countdown.formatted}</span>}
        </CountdownDiv>

        <IconContext.Provider value={{ size: '1.5em' }}>
          {' '}
          <SongDiv>
            <IoIosMusicalNotes />
            <SwitchTransition mode="out-in">
              <CSSTransition
                key={song}
                nodeRef={songRef}
                appear
                in={true}
                timeout={1000}
                classNames="fade">
                <SongName ref={songRef} className="marquee">
                  <p>{song}</p>
                </SongName>
              </CSSTransition>
            </SwitchTransition>
          </SongDiv>
        </IconContext.Provider>
      </LayoutContainer>
    </ThemeProvider>
  );
};

render(<Odliczanie />);
