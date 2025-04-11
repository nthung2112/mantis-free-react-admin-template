import { Theme } from '@mui/material/styles';

export type ShadowType =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success'
  | 'primaryButton'
  | 'secondaryButton'
  | 'errorButton'
  | 'warningButton'
  | 'infoButton'
  | 'successButton';

// ==============================|| CUSTOM FUNCTION - COLOR SHADOWS ||============================== //

export default function getShadow(theme: Theme, shadow: ShadowType | string): string {
  switch (shadow) {
    case 'secondary':
      return theme.customShadows.secondary;
    case 'error':
      return theme.customShadows.error;
    case 'warning':
      return theme.customShadows.warning;
    case 'info':
      return theme.customShadows.info;
    case 'success':
      return theme.customShadows.success;
    case 'primaryButton':
      return theme.customShadows.primaryButton;
    case 'secondaryButton':
      return theme.customShadows.secondaryButton;
    case 'errorButton':
      return theme.customShadows.errorButton;
    case 'warningButton':
      return theme.customShadows.warningButton;
    case 'infoButton':
      return theme.customShadows.infoButton;
    case 'successButton':
      return theme.customShadows.successButton;
    default:
      return theme.customShadows.primary;
  }
}
