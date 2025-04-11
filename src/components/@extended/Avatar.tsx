import { ReactNode } from 'react';
import { styled, Theme } from '@mui/material/styles';
import MuiAvatar from '@mui/material/Avatar';

// project imports
import getColors from 'utils/getColors';

// types
type AvatarSize = 'badge' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type AvatarType = 'filled' | 'outlined' | 'combined' | 'light';
type ColorType = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';

interface StyleProps {
  theme: Theme;
  color: ColorType | string;
  type?: AvatarType;
}

interface SizeStyleProps {
  fontSize: string;
  width: number;
  height: number;
  border?: string;
}

// color style function
function getColorStyle({ theme, color, type }: StyleProps) {
  const colors = getColors(theme, color);
  const { lighter, light, main, contrastText } = colors;

  switch (type) {
    case 'filled':
      return {
        color: contrastText,
        background: main
      };
    case 'outlined':
      return {
        color: main,
        border: '1px solid',
        borderColor: main,
        background: 'transparent'
      };
    case 'combined':
      return {
        color: main,
        border: '1px solid',
        borderColor: light,
        background: lighter
      };
    default:
      return {
        color: main,
        background: lighter
      };
  }
}

// ==============================|| AVATAR - SIZE STYLE ||============================== //

function getSizeStyle(size: AvatarSize): SizeStyleProps {
  switch (size) {
    case 'badge':
      return {
        border: '2px solid',
        fontSize: '0.675rem',
        width: 20,
        height: 20
      };
    case 'xs':
      return {
        fontSize: '0.75rem',
        width: 24,
        height: 24
      };
    case 'sm':
      return {
        fontSize: '0.875rem',
        width: 32,
        height: 32
      };
    case 'lg':
      return {
        fontSize: '1.2rem',
        width: 52,
        height: 52
      };
    case 'xl':
      return {
        fontSize: '1.5rem',
        width: 64,
        height: 64
      };
    case 'md':
    default:
      return {
        fontSize: '1rem',
        width: 40,
        height: 40
      };
  }
}

interface AvatarStyleProps {
  color?: ColorType | string;
  type?: AvatarType;
  size?: AvatarSize;
}

const AvatarStyle = styled(MuiAvatar, {
  shouldForwardProp: (prop) => prop !== 'color' && prop !== 'type' && prop !== 'size'
})<AvatarStyleProps>(({ theme, size, color, type }) => ({
  ...getSizeStyle(size || 'md'),
  ...getColorStyle({ theme, color: color || 'primary', type }),
  ...(size === 'badge' && {
    borderColor: theme.palette.background.default
  })
}));

// ==============================|| AVATAR - EXTENDED ||============================== //

interface AvatarProps extends Omit<React.ComponentProps<typeof MuiAvatar>, 'color'> {
  children?: ReactNode;
  color?: ColorType | string;
  type?: AvatarType;
  size?: AvatarSize;
}

const Avatar = ({ children, color = 'primary', type, size = 'md', ...others }: AvatarProps) => {
  return (
    <AvatarStyle color={color} type={type} size={size} {...others}>
      {children}
    </AvatarStyle>
  );
};

export default Avatar;
