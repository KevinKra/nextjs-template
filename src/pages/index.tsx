import { Box, IconButton, styled } from '@mui/material';
import UnitSnapshot from '../components/molecules/UnitSnapshot';
import { colorMode, theme } from '../PageProvider';

export default function Home() {
  return (
    <Background>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 1,
          p: 3
        }}
      >
        {theme.palette?.mode} mode
        <IconButton
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          {theme.palette?.mode === 'dark' ? 'dark' : 'light'}
        </IconButton>
      </Box>
      <UnitSnapshot
        title="Unit #1"
        uuid="abcd-1234-efgh-5678"
        water={{ type: 'water', value: 98, status: 'success' }}
        energy={{ type: 'energy', value: 85, status: 'success' }}
        pressure={{ type: 'pressure', value: 25, status: 'error' }}
        inError={true}
      />
      <UnitSnapshot
        title="Unit #1"
        uuid="abcd-1234-efgh-5678"
        water={{ type: 'water', value: 98, status: 'success' }}
        energy={{ type: 'energy', value: 79, status: 'success' }}
        pressure={{ type: 'pressure', value: 85, status: 'success' }}
        inError={false}
      />
      <UnitSnapshot
        loading={true}
        inError={true}
        title="Unit #1"
        uuid="abcd-1234-efgh-5678"
        water={{ type: 'water', value: 98, status: 'success' }}
        energy={{ type: 'energy', value: 79, status: 'success' }}
        pressure={{ type: 'pressure', value: 85, status: 'success' }}
      />
    </Background>
  );
}

const Background = styled('div')`
  height: 100vh;
  width: 100vw;
`;
