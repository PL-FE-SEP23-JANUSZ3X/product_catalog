import { PaletteColor } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }

  export interface CommonColors {
    black: string;
    white: string;
  }
  export type ColorPartial = Partial<Color>;

  export interface TypeText {
    primary: string;
    secondary: string;
    disabled: string;
  }

  export interface TypeBackground {
    default: string;
    paper: string;
  }

  export interface TypeObject {
    text: TypeText;
    action: TypeAction;
    divider: TypeDivider;
    background: TypeBackground;
  }

  export interface Palette {
    primary: PaletteColor;
    secondary: PaletteColor;
    icons: PaletteColor;
    bgHover: PaletteColor;
    elements: PaletteColor;
    white: PaletteColor;
    green: PaletteColor;
    red: PaletteColor;
    accent: PaletteColor;
    common: CommonColors;
    mode: PaletteMode;
    error: PaletteColor;
    warning: PaletteColor;
    info: PaletteColor;
    success: PaletteColor;
    grey: Color;
    text: TypeText;
    divider: TypeDivider;
    action: TypeAction;
    background: TypeBackground;
  }

  export interface PaletteOptions {
    primary?: PaletteColorOptions;
    secondary?: PaletteColorOptions;
    error?: PaletteColorOptions;
    warning?: PaletteColorOptions;
    info?: PaletteColorOptions;
    success?: PaletteColorOptions;
    mode?: PaletteMode;
    tonalOffset?: PaletteTonalOffset;
    contrastThreshold?: number;
    common?: Partial<CommonColors>;
    grey?: ColorPartial;
    text?: Partial<TypeText>;
    divider?: string;
    action?: Partial<TypeAction>;
    background?: Partial<TypeBackground>;
    getContrastText?: (background: string) => string;
  }

  export interface TypographyVariants {
    upper: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  export interface TypographyVariantsOptions {
    upper?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    upper: true;
  }
}
