// project import
import dashboard from './dashboard';
import pages from './page';
import utilities from './utilities';
import support from './support';
import { MenuItemType, NavItemType } from 'types/navigation';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: MenuItemType = {
  items: [dashboard, pages, utilities, support] as NavItemType[]
};

export default menuItems;
