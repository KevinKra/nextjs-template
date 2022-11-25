/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { ReactNode } from 'react';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material';
import { getDesignTokens } from './theme';
import useDarkMode from 'use-dark-mode';

interface PageProviderProps {
  children: ReactNode;
}

// * setup for testing support
export let theme: ThemeOptions;
// export let colorMode: { toggleColorMode: () => void };
export let toggleThemeMode: () => void;

// eslint-disable-next-line @typescript-eslint/no-empty-function
// export const ColorModeContext = React.createContext({
//   toggleColorMode: () => {}
// });

const PageProvider = ({ children }: PageProviderProps) => {
  //   const darkMode = useDarkMode(false);
  //   const themeMode = darkMode.value ? 'dark' : 'light';
  //   console.log(themeMode, darkMode);

  //   const [mode, setMode] = React.useState<PaletteMode>(themeMode);

  //   colorMode = darkMode.toggle();

  //   colorMode = React.useMemo(
  //     () => ({
  //       // The dark mode switch would invoke this method
  //       toggleColorMode: () => {
  //         darkMode.toggle();
  //         // setMode((prevMode: PaletteMode) =>
  //         //   prevMode === 'light' ? 'dark' : 'light'
  //         // );
  //       }
  //     }),
  //     [darkMode]
  //   );

  //   theme = React.useMemo(
  //     () => createTheme(getDesignTokens(darkMode.value)),
  //     [darkMode.value]
  //   );

  const darkMode = useDarkMode(false);
  const themeMode = darkMode.value ? 'dark' : 'light';

  const [mounted, setMounted] = React.useState(false);

  toggleThemeMode = darkMode.toggle;

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // * used in testing
  theme = React.useMemo(
    () => createTheme(getDesignTokens(themeMode)),
    [themeMode]
  );

  const body = <ThemeProvider theme={theme}>{children}</ThemeProvider>;

  // prevents ssr flash for mismatched dark mode
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{body}</div>;
  }

  return body;
};

export default PageProvider;
