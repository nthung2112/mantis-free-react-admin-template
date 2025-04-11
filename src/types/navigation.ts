import { ForwardRefExoticComponent, RefAttributes, ReactElement, JSXElementConstructor } from 'react';
import { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon';
import { ChipProps } from '@mui/material/Chip';

export type NavIcon = ForwardRefExoticComponent<Omit<AntdIconProps, 'ref'> & RefAttributes<HTMLSpanElement>>;

interface NavChip extends Omit<ChipProps, 'color' | 'avatar'> {
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  label: string;
  avatar?: ReactElement<unknown, string | JSXElementConstructor<any>>;
}

interface NavAction {
  icon: NavIcon;
  type: 'link' | 'function';
  url?: string;
  target?: boolean;
  function?: () => void;
}

export interface NavItemType {
  id: string;
  title: string;
  type: 'group' | 'item' | 'collapse';
  url?: string;
  icon?: NavIcon;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: NavItemType[];
  external?: boolean;
  chip?: NavChip;
  actions?: NavAction[];
  disabled?: boolean;
  link?: string;
}

export interface MenuItemType {
  items: NavItemType[];
}
