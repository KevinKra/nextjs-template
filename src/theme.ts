import { PaletteMode, createTheme } from "@mui/material";
import { amber, grey, deepOrange } from "@mui/material/colors";

export const getDesignTokens = (mode: PaletteMode) => ({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: "50px",
          fontSize: "1rem",
          padding: ".25rem 1.5rem",
        },
      },
    },
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#FE5366",
          },
          success: {
            main: "#69C55A",
            light: "#BAE4B3",
          },
          error: {
            main: "#E84B4B",
            light: "#FFBCBC",
          },

          // divider: amber[200],
          // text: {
          //   primary: grey[900],
          //   secondary: grey[800],
          // },
        }
      : {
          // palette values for dark mode
          // primary: deepOrange,
          // divider: deepOrange[700],
          // background: {
          //   default: deepOrange[900],
          //   paper: deepOrange[900],
          // },
          // text: {
          //   primary: "#fff",
          //   secondary: grey[500],
          // },
        }),
  },
});
