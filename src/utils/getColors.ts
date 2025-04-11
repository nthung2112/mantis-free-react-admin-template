import { Theme } from '@mui/material/styles';
import { CustomPaletteColor } from '../types/theme';

type ColorKeys = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';

// ==============================|| CUSTOM FUNCTION - COLORS ||============================== //

export default function getColors(theme: Theme, color: ColorKeys | string): CustomPaletteColor {
  const paletteColor = theme.palette[color as keyof typeof theme.palette] as CustomPaletteColor;
  if (!paletteColor) {
    return theme.palette.primary as CustomPaletteColor;
  }
  return paletteColor;
}
