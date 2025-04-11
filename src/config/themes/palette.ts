import { Theme, createTheme, PaletteMode } from '@mui/material/styles';

// third-party
import { presetDarkPalettes, presetPalettes } from '@ant-design/colors';

// project imports
import ThemeOption from './theme';

// types
type PresetColor = keyof typeof presetPalettes;

// ==============================|| DEFAULT THEME - PALETTE ||============================== //

export default function Palette(mode: PaletteMode, presetColor: PresetColor): Theme {
  const colors = {
    ...presetPalettes,
    blue: presetPalettes.blue,
    red: presetPalettes.red,
    gold: presetPalettes.gold,
    cyan: presetPalettes.cyan,
    green: presetPalettes.green,
    grey: [] as string[]
  };

  const greyPrimary: string[] = [
    '#ffffff',
    '#fafafa',
    '#f5f5f5',
    '#f0f0f0',
    '#d9d9d9',
    '#bfbfbf',
    '#8c8c8c',
    '#595959',
    '#262626',
    '#141414',
    '#000000'
  ];
  const greyAscent: string[] = ['#fafafa', '#bfbfbf', '#434343', '#1f1f1f'];
  const greyConstant: string[] = ['#fafafb', '#e6ebf1'];

  colors.grey = [...greyPrimary, ...greyAscent, ...greyConstant];

  const paletteColor = ThemeOption(colors, presetColor, mode);

  return createTheme({
    palette: {
      mode,
      common: {
        black: '#000',
        white: '#fff'
      },
      ...paletteColor,
      text: {
        primary: paletteColor.grey[700],
        secondary: paletteColor.grey[500],
        disabled: paletteColor.grey[400]
      },
      action: {
        disabled: paletteColor.grey[300]
      },
      divider: paletteColor.grey[200],
      background: {
        paper: paletteColor.grey[0],
        default: paletteColor.grey.A50
      }
    }
  });
}
