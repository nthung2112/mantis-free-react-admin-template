// material-ui
import { SxProps, Theme } from '@mui/material/styles';

// project imports
import NavCard from './NavCard';
import Navigation from './Navigation';
import SimpleBar from 'components/third-party/SimpleBar';
import { useGetMenuMaster } from 'api/menu';

// ==============================|| DRAWER CONTENT ||============================== //

export default function DrawerContent() {
  const { menuMaster = { isDashboardDrawerOpened: false } } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  const contentSx: SxProps<Theme> = {
    '& .simplebar-content': {
      display: 'flex',
      flexDirection: 'column'
    }
  };

  return (
    <>
      <SimpleBar sx={contentSx}>
        <Navigation />
        {drawerOpen && <NavCard />}
      </SimpleBar>
    </>
  );
}
