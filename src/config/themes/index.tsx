import { useMemo, ReactNode } from 'react';

// material-ui
import { Theme, createTheme, ThemeProvider, StyledEngineProvider, ThemeOptions } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// project imports
import Palette from './palette';
import Typography from './typography';
import CustomShadows from './shadows';
import componentsOverride from './overrides';

// types
interface CustomShadowType {
  button: string;
  text: string;
  z1: string;
  primary: string;
  secondary: string;
  error: string;
  warning: string;
  info: string;
  success: string;
  grey: string;
  primaryButton: string;
  secondaryButton: string;
  errorButton: string;
  warningButton: string;
  infoButton: string;
  successButton: string;
  greyButton: string;
}

interface ExtendedTheme extends Theme {
  customShadows: CustomShadowType;
}

interface ExtendedThemeOptions extends ThemeOptions {
  customShadows?: CustomShadowType;
}

interface ThemeCustomizationProps {
  children: ReactNode;
}

// ==============================|| DEFAULT THEME - MAIN ||============================== //

const ThemeCustomization = ({ children }: ThemeCustomizationProps) => {
  const theme = Palette('light', 'default');

  const themeTypography = Typography(`'Public Sans', sans-serif`);
  const themeCustomShadows = useMemo(() => CustomShadows(theme) as CustomShadowType, [theme]);

  const themeOptions = useMemo<ExtendedThemeOptions>(() => {
    return {
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1440
        }
      },
      direction: 'ltr',
      mixins: {
        toolbar: {
          minHeight: 60,
          paddingTop: 8,
          paddingBottom: 8
        }
      },
      palette: theme.palette,
      customShadows: themeCustomShadows,
      typography: themeTypography
    };
  }, [theme, themeTypography, themeCustomShadows]);

  const themes = createTheme(themeOptions) as ExtendedTheme;
  themes.components = componentsOverride(themes);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeCustomization;
