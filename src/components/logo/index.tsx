import { Link } from 'react-router-dom';

// material-ui
import ButtonBase from '@mui/material/ButtonBase';

// project imports
import Logo from './LogoMain';
import LogoIcon from './LogoIcon';
import { APP_DEFAULT_PATH } from 'config';
import { SxProps, Theme } from '@mui/material';

// types
interface LogoSectionProps {
  reverse?: boolean;
  isIcon?: boolean;
  sx?: SxProps<Theme>; // You might want to use proper MUI types here
  to?: string; // You might want to use proper react-router types here
}

// ==============================|| MAIN LOGO ||============================== //

export default function LogoSection({ reverse, isIcon, sx, to }: LogoSectionProps) {
  return (
    <ButtonBase disableRipple component={Link} to={to || APP_DEFAULT_PATH} sx={sx}>
      {isIcon ? <LogoIcon /> : <Logo reverse={reverse} />}
    </ButtonBase>
  );
}
