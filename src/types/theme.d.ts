import { Theme as MuiTheme, PaletteColor } from '@mui/material/styles';

export interface CustomPaletteColor extends PaletteColor {
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
  contrastText: string;
}

export interface CustomShadows {
  primary: string;
  secondary: string;
  error: string;
  warning: string;
  info: string;
  success: string;
  primaryButton: string;
  secondaryButton: string;
  errorButton: string;
  warningButton: string;
  infoButton: string;
  successButton: string;
  z1: string;
}

declare module '@mui/material/styles' {
  interface PaletteColor extends CustomPaletteColor {}

  interface Palette {
    grey: {
      0: string;
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      A50: string;
      A100: string;
      A200: string;
      A400: string;
      A700: string;
      A800: string;
    };
    primary: PaletteColor;
    secondary: PaletteColor;
    error: PaletteColor;
    warning: PaletteColor;
    info: PaletteColor;
    success: PaletteColor;
  }

  interface ThemeOptions {
    customShadows?: CustomShadows;
  }

  interface Theme {
    customShadows: CustomShadows;
  }
}
