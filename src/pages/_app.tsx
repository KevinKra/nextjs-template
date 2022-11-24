import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import {
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeOptions,
  ThemeProvider
} from '@mui/material';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../createEmotionCache';
import { getDesignTokens } from '../theme';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

// ? Prevent fontawesome from dynamically adding its css -- prevents flicker
config.autoAddCss = false;

// ? Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

// * setup for testing support
export let theme: ThemeOptions;

export default function App({ Component, pageProps }: MyAppProps) {
  const [mode] = React.useState<PaletteMode>('light');
  // const colorMode = React.useMemo(
  //   () => ({
  //     // The dark mode switch would invoke this method
  //     toggleColorMode: () => {
  //       setMode((prevMode: PaletteMode) =>
  //         prevMode === "light" ? "dark" : "light"
  //       );
  //     },
  //   }),
  //   []
  // );

  theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  // Update the theme only if the mode changes
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
