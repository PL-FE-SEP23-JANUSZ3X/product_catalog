import { PaletteMode } from "@mui/material";
import { darkPalette, lightPalette } from "./palette";
import { typography } from "./typography";
import { CustomMuiButtonsDark, CustomMuiButtonsLigth } from "./CustomMuiButtons";
import { CustomMuiCssBaseline } from "./CustomMuiCssBaseline";

export const customTheme = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? lightPalette
      : darkPalette 
      ),
  },
  typography: typography,
  components: {
    MuiCssBaseline: CustomMuiCssBaseline,
    MuiScopedCssBaseline: {
      styleOverrides: {
        root: {
          margin: '0',
          padding: 0,
        },
      },
    },
    MuiGridItem: {
      styleOverrides: {
        root: {
          margin: '0',
          padding: '0',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          margin: '0',
          padding: '0',
          "& .MuiTypography-root": {
            margin: '0',
            padding: '0',
          },
        },
      },
    },
    mode,
    ...(mode === "light"
    ? {
      MuiButton: CustomMuiButtonsLigth,
    }
    : {
      MuiButton: CustomMuiButtonsDark,
    })
  },

  breakpoints: {
    values: {
      xs: 320, // phone
      sm: 640, // tablets
      md: 1200, // small laptop
      lg: 1440, // desktop
      xl: 1440 // large screens
    }
  }
});

export default customTheme;
