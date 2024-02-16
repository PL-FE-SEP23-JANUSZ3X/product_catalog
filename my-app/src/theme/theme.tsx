import { PaletteMode } from "@mui/material";

const colors = {
  greenSelected: '#27AE60',
  whiteSelected: '#F1F2F9',
  bgLight: '#313237',
  bgDark: '#905BFF',
  whiteDefault: '#fff',
  bgSelectedDark: '#323542',
  borderSelected: '#E2E6E9',
  hoverDark: '#A378FF',
}
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
          badge: {
            main: "#fff"
          },
          badgeBorder: {
            main: "#fff"
          }
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
            paper: "#161827",
          },
          text: {
            primary: "#F1F2F9",
            secondary: "#75767F",
          },
          badge: {
            main: "#fff"
          },
          badgeBorder: {
            main: "#323542"
          }
        }),
  },
  typography: {
    fontFamily: ["Mont", "sans-serif"].join(","),
    h1: {
      fontWeight: 800,
      fontSize: "48px",
      lineHeight: "56px",
    },
    h1Mob: {
      fontWeight: 800,
      fontSize: "32px",
      lineHeight: "41px",
    },
    h2: {
      fontWeight: 800,
      fontSize: "32px",
      lineHeight: "41px",
    },
    h2Mob: {
      fontWeight: 800,
      fontSize: "22px",
      lineHeight: "31px",
    },
    h3: {
      fontWeight: 800,
      fontSize: "22px",
      lineHeight: "30px",
    },
    h3Mob: {
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "26px",
    },
    h4: {
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "26px",
    },
    h4Mob: {
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "20px",
    },
    button: {
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "21px",
      textTransform: "uppercase" as const,
      textDecoration: 'none',
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
    upper: {
      fontWeight: 700,
      fontSize: "12px",
      lineHeight: "11px",
      textTransform: "uppercase" as const,
    },
    link: {
      fontSize: '12px',
      fontWeight: '800',
      lineHeight: '11px',
      letterSpacing: '0.04em',
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
        },
        root: {
          boxSizing: 'border-box',
          margin: 0,
          padding: 0,
        },
      }
    },
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
      MuiButton: {
        variants: [
          {
            props: {
              variant: 'primary' as const
            },
            style: {
              width: '100%',
              heigth: '40px',
              py: '10px',
              borderRadius: '0',
              color: colors.whiteDefault,
              backgroundColor: colors.bgLight,
              cursor: 'pointer',
              textTransform: "none" as const,
              fontSize: '14px' as const,
              fontWeight: '700' as const,
              lineHeight: '21px' as const,
              textAlign: 'center' as const,
              "&:hover": {
                color: colors.whiteDefault,
                backgroundColor: colors.bgLight,
                boxShadow: '0px 3px 13px 0px #17203166',
              },
              "&:active": {
                color: colors.greenSelected,
                backgroundColor: colors.whiteDefault,
                outline: 'solid',
                outlineWidth: '1px',
                outlineColor: colors.borderSelected,
                boxShadow:'none',
              },
            },
          },
          {
            props: { variant: 'selected' as const},
            style: {
              width: '100%',
              borderRadius: '0',
              color: colors.greenSelected,
              outline: 'solid',
              outlineWidth: '1px',
              outlineColor: colors.borderSelected,
              cursor: 'pointer',
              textTransform: "none" as const,
              fontSize: '14px' as const,
              fontWeight: '700' as const,
              lineHeight: '21px' as const,
              textAlign: 'center' as const,
              "&:hover": {
                color: colors.whiteDefault,
                backgroundColor: colors.bgLight,
                boxShadow: '0px 3px 13px 0px #17203166',
              },
              "&:active": {
                color: colors.whiteDefault,
                backgroundColor: colors.bgLight,
              },
            },
          },
        ],
      },
    }
    : {
      MuiButton: {
        variants: [
          {
            props: {
              variant: 'primary' as const
            },
            style: {
              width: '100%',
              heigth: '40px',
              py: '10px',
              borderRadius: '0',
              color: colors.whiteSelected,
              backgroundColor: colors.bgDark,
              cursor: 'pointer',
              textTransform: "none" as const,
              fontSize: '14px' as const,
              fontWeight: '700' as const,
              lineHeight: '21px' as const,
              textAlign: 'center' as const,
              "&:hover": {
                color: colors.whiteSelected,
                backgroundColor: colors.hoverDark,
              },
              "&:active": {
                color: colors.whiteSelected,
                backgroundColor: colors.bgSelectedDark,
              },
            },
          },
          {
            props: { variant: 'selected' as const},
            style: {
              width: '100%',
              borderRadius: '0',
              color: colors.whiteSelected,
              backgroundColor: colors.bgSelectedDark,
              cursor: 'pointer',
              textTransform: "none" as const,
              fontSize: '14px' as const,
              fontWeight: '700' as const,
              lineHeight: '21px' as const,
              textAlign: 'center' as const,
              "&:hover": {
                color: colors.whiteSelected,
                backgroundColor: colors.hoverDark,
              },
              "&:active": {
                color: colors.whiteSelected,
                backgroundColor: colors.bgDark,
              },
            },
          },
        ],
      },
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
