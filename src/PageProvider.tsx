import { ReactNode } from 'react';
import {
  createTheme,
  PaletteMode,
  ThemeOptions,
  ThemeProvider
} from '@mui/material';
import React from 'react';
import { getDesignTokens } from './theme';

interface PageProviderProps {
  children: ReactNode;
}

// * setup for testing support
export let theme: ThemeOptions;
export let colorMode: { toggleColorMode: () => void };

// eslint-disable-next-line @typescript-eslint/no-empty-function
// export const ColorModeContext = React.createContext({
//   toggleColorMode: () => {}
// });

const PageProvider = ({ children }: PageProviderProps) => {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        );
      }
    }),
    []
  );

  theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default PageProvider;
