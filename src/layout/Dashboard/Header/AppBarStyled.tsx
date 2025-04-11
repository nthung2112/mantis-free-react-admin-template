// material-ui
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import { Theme } from '@mui/material/styles';

// project imports
import { DRAWER_WIDTH } from 'config';

interface AppBarStyledProps {
  open?: boolean;
  theme?: Theme;
}

const AppBarStyled = styled(AppBar, { shouldForwardProp: (prop) => prop !== 'open' })<AppBarStyledProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open === false && {
    width: `calc(100% - ${theme.spacing(7.5)})`
  }),
  ...(open === true && {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

export default AppBarStyled;
