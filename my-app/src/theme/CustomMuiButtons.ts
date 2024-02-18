import { colors } from "./colors";

export const CustomMuiButtonsLigth = {
    variants: [
      {
        props: {
          variant: 'buttonDefault' as const
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
        },
      },
      {
        props: { variant: 'buttonSelected' as const},
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
            outlineColor: colors.iconsBorderHoverLight,
          },
        },
      },
      {
        props: {
          variant: 'favouritesButtonDefault' as const
        },
        style: {
          minWidth: '40px',
          width: '40px',
          outline: 'solid',
          outlineWidth: '1px',
          borderRadius: '0',
          outlineColor: colors.iconsBorderDefaultLight,
          "&:hover": {
            outlineColor: colors.iconsBorderHoverLight,
          },
        },
      },
      {
        props: {
          variant: 'favouritesButtonSelected' as const
        },
        style: {
          minWidth: '40px',
          width: '40px',
          padding: 0,
          borderRadius: '0',
          outline: 'solid',
          outlineWidth: '1px',
          outlineColor: colors.iconsBorderSelectedLight,
          "&:hover": {
            outlineColor: colors.iconsBorderHoverLight,
          },
        },
      },
    ],
}

export const CustomMuiButtonsDark = {
    variants: [
      {
        props: {
          variant: 'buttonDefault' as const
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
            backgroundColor: colors.hoverDark,
          },
        },
      },
      {
        props: { variant: 'buttonSelected' as const},
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
            backgroundColor: colors.hoverDark,
          },
        },

      },
      {
        props: {
          variant: 'favouritesButtonDefault' as const
        },
        style: {
          minWidth: '40px',
          width: '40px',
          padding: 0,
          borderRadius: '0',
          outline: 'none',
          backgroundColor: colors.bgSelectedDark,
          "&:hover": {
            backgroundColor: colors.bgMiddleDark,
          },
        },
      },
      {
        props: {
          variant: 'favouritesButtonSelected' as const
        },
        style: {
          minWidth: '40px',
          width: '40px',
          padding: 0,
          borderRadius: '0',
          outline: 'solid',
          outlineWidth: '1px',
          outlineColor: colors.iconsBorderSelectedDark,
          backgroundColor: 'transparent',
          "&:hover": {
            outline: 'none',
            backgroundColor: colors.bgMiddleDark,
          },
        },
      },
    ],
}