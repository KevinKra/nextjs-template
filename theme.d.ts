import "@mui/material";

declare module "@mui/material/styles" {
  // allow configuration using `createTheme`
  interface TypeBackground {
    dark: string;
  }
  interface TypeText {
    light: string;
    inverse: {
      primary: string;
      secondary: string;
    };
  }
  interface PaletteOptions {
    background?: {
      dark: string;
    };
    text?: {
      light: string;
      inverse: {
        primary: string;
        secondary: string;
      };
    };
    border?: {
      light: string;
      main: string;
      dark: string;
    };
  }
  interface Palette {
    background: {
      dark: string;
    };
    text: {
      light: string;
      inverse: {
        primary: string;
        secondary: string;
      };
    };
    border: {
      light: string;
      main: string;
      dark: string;
    };
  }
}
