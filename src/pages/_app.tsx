import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import {
  // createTheme,
  CssBaseline
  // GlobalStyles,
  // PaletteMode,
  // ThemeOptions
  // ThemeProvider
} from '@mui/material';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../createEmotionCache';
// import { getDesignTokens } from '../theme';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import PageProvider from '../PageProvider';
import { ThemeProvider } from 'next-themes';

// ? Prevent fontawesome from dynamically adding its css -- prevents flicker
config.autoAddCss = false;

// ? Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App({ Component, pageProps }: MyAppProps) {
  // Update the theme only if the mode changes
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider>
        {/* <ColorModeContext.Provider value={colorMode}> */}
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <PageProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </PageProvider>
        {/* </ColorModeContext.Provider> */}
      </ThemeProvider>
    </CacheProvider>
  );
}

// export function ToggleColorMode() {
//   const [mode, setMode] = React.useState<'light' | 'dark'>('light');
//   const colorMode = React.useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
//       }
//     }),
//     []
//   );

//   const theme = React.useMemo(
//     () =>
//       createTheme({
//         palette: {
//           mode
//         }
//       }),
//     [mode]
//   );

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <App />
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }
