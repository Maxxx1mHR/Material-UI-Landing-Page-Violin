import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    colors: {
      backgroundColorNavigationBar: string;
      textColor: string;
    };
  }

  interface PaletteOptions {
    colors?: {
      backgroundColorNavigationBar: string;
      textColor: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    colors: {
      backgroundColorNavigationBar: "#562B13",
      textColor: "#ffffff",
    },
  },
});
