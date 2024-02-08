import { PaletteMode } from "@mui/material";

export const customTheme = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#313237",
          },
          secondary: {
            main: "#89939A",
          },
          icons: {
            main: "#B4BDC3",
          },
          elements: {
            main: "#E2E6E9",
          },
          bgHover: {
            main: "#FAFBFC",
          },
          white: {
            main: "#fff",
          },
          green: {
            main: "#27AE60",
          },
          red: {
            main: "#EB5757",
          },
          accent: {
            main: "#313237",
          },
          background: {
            default: "#fff",
            paper: "#fff",
          },
          text: {
            primary: "#313237",
            secondary: "#fff",
          },
          success: {
            main: "#27AE60",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#F1F2F9",
          },
          secondary: {
            main: "#75767F",
          },
          icons: {
            main: "#4A4D58",
          },
          elements: {
            main: "#3B3E4A",
          },
          bgHover: {
            main: "#3B3E4A",
          },
          white: {
            main: "#F1F2F9",
          },
          green: {
            main: "#27AE60",
          },
          red: {
            main: "#EB5757",
          },
          accent: {
            main: "#905BFF",
          },
          background: {
            default: "#0F1121",
            paper: "#0F1121",
          },
          text: {
            primary: "#F1F2F9",
            secondary: "#75767F",
          },
        }),
  },
  typography: {
    fontFamily: ["Montserrat", "Helvetica", "Arial", "sans-serif"].join(","),
    h1: {
      fontWeight: 800,
      fontSize: "48px",
      lineHeight: "56px",
    },
    h2: {
      fontWeight: 800,
      fontSize: "32px",
      lineHeight: "41px",
    },
    h3: {
      fontWeight: 800,
      fontSize: "22px",
      lineHeight: "30px",
    },
    h4: {
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "26px",
    },
    button: {
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "21px",
    },
    body1: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "21px",
    },
    body2: {
      fontWeight: 600,
      fontSize: "12px",
      lineHeight: "16px",
    },
    //this is the custom prop I want to add
    upper: {
      fontWeight: 700,
      fontSize: "12px",
      lineHeight: "11px",
      textTransform: "uppercase" as const,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          boxSizing: 'border-box',
          margin: 0,
          padding: 0,
        },
        body: {
          transition: 'all 0.25s ease-in-out',
        }
      }
    },
    MuiScopedCssBaseline: {
      styleOverrides: {
        root: {
          margin: '0',
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
