import { PaletteMode, Shadows, ThemeOptions } from '@mui/material';

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: '50px',
          fontSize: '1rem',
          padding: '.25rem 1.5rem'
        }
      }
    }
  },
  /* offset-x | offset-y | blur-radius | spread-radius | color */
  shadows: [
    'none',
    '0px 0px 0px 0px rgba(0, 0, 0, 0)',
    '0px 2px 2px 0px rgba(0, 0, 0, 0.25)',
    '0px 6px 8px 0px rgba(0, 0, 0, 0.25)',
    '0px 15px 52px 15px rgba(50, 59, 82, 0.15)',
    ...(Array(20).fill('none') as string[])
  ] as Shadows,
  typography: {
    h1: {
      fontSize: 36,
      fontWeight: 400
    },
    h2: {
      fontSize: 32,
      fontWeight: 400
    },
    h3: {
      fontSize: 28,
      fontWeight: 400
    },
    h4: {
      fontSize: 24,
      fontWeight: 700,
      transform: 'translateX(-3px)'
    },
    h5: {
      fontSize: 20,
      fontWeight: 700
    },
    h6: {
      fontSize: 16,
      fontWeight: 700
    },
    subtitle1: {
      fontSize: 18
    },
    subtitle2: {
      fontSize: 16
    },
    body1: {
      fontSize: 14
    },
    body2: {
      fontSize: 12
    },
    button: {
      fontSize: 14
    },
    caption: {
      fontSize: 14,
      fontWeight: 300
    },
    overline: {
      fontSize: 12,
      fontWeight: 400,
      fontStyle: 'uppercase',
      lineHeight: 1
    }
  },
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            light: '#FF7988',
            main: '#FE5366',
            dark: '#E04052'
          },
          text: {
            light: '#BBBBBB',
            primary: '#212121',
            secondary: '#616161',
            inverse: {
              primary: '#ffffff',
              secondary: '#E0E0E0'
            }
          },
          success: {
            light: '#BAE4B3',
            main: '#69C55A',
            dark: '#62A857'
          },
          error: {
            light: '#FFBCBC',
            main: '#E84B4B',
            dark: '#CF4242'
          },
          common: {
            white: '#ffffff',
            black: '#000000'
          },
          background: {
            default: '#ffffff',
            paper: '#ffffff',
            dark: '#D9D9D9'
          },
          border: {
            light: '#EFEFEF',
            main: '#D9D9D9',
            dark: '#979797'
          }
        }
      : {
          // palette values for dark mode
          primary: {
            light: '#FF7988',
            main: '#FE5366',
            dark: '#E04052'
          },
          text: {
            // light: '#BBBBBB',
            primary: '#ffffff',
            // secondary: '#616161',
            inverse: {
              primary: '#ffffff',
              secondary: '#E0E0E0'
            }
          },
          // success: {
          //   light: '#BAE4B3',
          //   main: '#69C55A',
          //   dark: '#62A857'
          // },
          // error: {
          //   light: '#FFBCBC',
          //   main: '#E84B4B',
          //   dark: '#CF4242'
          // },
          // common: {
          //   white: '#ffffff',
          //   black: '#000000'
          // },
          background: {
            default: '#0A1929',
            paper: '#001E3C',
            dark: '#D9D9D9'
          },
          border: {
            light: '#5090D3',
            main: '#D9D9D9',
            dark: '#979797'
          }
        })
  }
});
