import { ElementType } from 'react';
import { SxProps, Theme } from '@mui/material/styles';
import { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon';

export type MenuType = 'group' | 'collapse' | 'item';
export type ColorType = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | string;

export interface MenuItem {
  id: string;
  title: string;
  type: MenuType;
  url?: string;
  icon?: ElementType<AntdIconProps>;
  target?: boolean;
  external?: boolean;
  disabled?: boolean;
  breadcrumbs?: boolean;
  caption?: string;
  children?: MenuItem[];
}

export interface CustomLink {
  icon?: ElementType<AntdIconProps>;
  title: string;
  to?: string;
}

export interface BreadcrumbsProps {
  card?: boolean;
  custom?: boolean;
  divider?: boolean;
  heading?: string;
  icon?: boolean;
  icons?: boolean;
  links?: CustomLink[];
  maxItems?: number;
  rightAlign?: boolean;
  separator?: ElementType<any>;
  title?: boolean;
  titleBottom?: boolean;
  sx?: SxProps<Theme>;
  [key: string]: any; // for other props
}
