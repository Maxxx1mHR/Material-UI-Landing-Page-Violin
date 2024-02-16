import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    colors: {
      backgroundColorNavigationBar: string;
      textColor: string;
    };
  }

  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
    desktop_large: true;
  }

  interface PaletteOptions {
    colors?: {
      backgroundColorNavigationBar: string;
      textColor: string;
    };
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 576,
      laptop: 768,
      desktop: 992,
      desktop_large: 1200,
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: 16,
    h1: {
      // fontSize: 36,
      fontWeight: 500,
      textAlign: "center",
    },
    subtitle1: {
      // fontSize: 30,
      fontWeight: 400,
      textAlign: "center",
    },
    body2: {
      textAlign: "justify",
    },
  },
  palette: {
    colors: {
      backgroundColorNavigationBar: "#562B13",
      textColor: "#ffffff",
    },
  },
});
