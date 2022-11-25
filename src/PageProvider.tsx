/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { ReactNode, createContext, useContext } from 'react';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material';
import { getDesignTokens } from './theme';
import useDarkMode from 'use-dark-mode';

interface PageProviderProps {
  children: ReactNode;
}

// * setup for testing support
export let theme: ThemeOptions;

type ThemeContext = {
  currentMode: string;
  toggleColorMode: () => void;
};
export const ThemeContext = createContext<ThemeContext>({
  currentMode: 'dark',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleColorMode: () => {}
});
export const useThemeContext = () => useContext(ThemeContext);

const PageProvider = ({ children }: PageProviderProps) => {
  const darkMode = useDarkMode(false);
  const themeMode = darkMode.value ? 'dark' : 'light';

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // * used in testing
  theme = React.useMemo(
    () => createTheme(getDesignTokens(themeMode)),
    [themeMode]
  );

  const body = (
    <ThemeContext.Provider
      value={{ currentMode: themeMode, toggleColorMode: darkMode.toggle }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );

  // prevents ssr flash for mismatched dark mode
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{body}</div>;
  }

  return body;
};

export default PageProvider;
