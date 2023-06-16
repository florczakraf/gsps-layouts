import { DashboardThemeProvider } from './components/DashboardThemeProvider';
import { render } from '../render';
import { useReplicant } from '../../use-replicant';
import { Button, Stack } from '@mui/material';

const obsDataRep = nodecg.Replicant('obsData');
const intermissionSceneName = nodecg.bundleConfig.obs.scenes?.intermission;

export const App = () => {
  const [obsData] = useReplicant(obsDataRep);
  return (
    <DashboardThemeProvider>
      {obsData && (
        <Stack spacing={1} useFlexGap>
          <Button
            variant="contained"
            disabled={obsData.scene != intermissionSceneName}
            onClick={() => {
              nodecg.sendMessage('playIntermissionVideo', false);
            }}>
            Krótki film na przerwie
          </Button>
          <Button
            variant="contained"
            disabled={obsData.scene != intermissionSceneName}
            onClick={() => {
              nodecg.sendMessage('playIntermissionVideo', true);
            }}>
            Długi (ok. 5min) film na przerwie
          </Button>
        </Stack>
      )}
    </DashboardThemeProvider>
  );
};

render(<App />);
