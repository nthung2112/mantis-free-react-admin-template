import { forwardRef, ReactNode, Ref, ComponentProps } from 'react';
import { alpha, styled, Theme } from '@mui/material/styles';
import MuiIconButton from '@mui/material/IconButton';
import { IconButtonProps as MuiIconButtonProps } from '@mui/material/IconButton';

// project imports
import getColors from 'utils/getColors';
import getShadow from 'utils/getShadow';
import { ColorType } from 'types/menu';

type IconButtonShape = 'square' | 'rounded';
type IconButtonVariant = 'contained' | 'light' | 'outlined' | 'dashed' | 'text' | 'shadow';

interface StyleProps {
  variant: IconButtonVariant;
  theme: Theme;
  color: ColorType;
}

// Only used for the styled component
interface StyledIconButtonProps {
  variant?: IconButtonVariant;
  shape?: IconButtonShape;
  customColor?: ColorType;
}

function getColorStyle({ variant, theme, color }: StyleProps) {
  const colors = getColors(theme, color);
  const { lighter, light, dark, main, contrastText } = colors;

  const buttonShadow = `${color}Button`;
  const shadows = getShadow(theme, buttonShadow);

  const commonShadow = {
    '&::after': {
      boxShadow: `0 0 6px 6px ${alpha(main, 0.9)}`
    },
    '&:active::after': {
      boxShadow: `0 0 0 0 ${alpha(main, 0.9)}`
    },
    '&:focus-visible': {
      outline: `2px solid ${dark}`,
      outlineOffset: 2
    }
  };

  switch (variant) {
    case 'contained':
      return {
        color: contrastText,
        background: main,
        '&:hover': {
          background: dark
        },
        ...commonShadow
      };
    case 'light':
      return {
        color: main,
        background: lighter,
        '&:hover': {
          background: alpha(light, 0.5)
        },
        ...commonShadow
      };
    case 'shadow':
      return {
        boxShadow: shadows,
        color: contrastText,
        background: main,
        '&:hover': {
          boxShadow: 'none',
          background: dark
        },
        ...commonShadow
      };
    case 'outlined':
      return {
        '&:hover': {
          background: 'transparent',
          color: dark,
          borderColor: dark
        },
        ...commonShadow
      };
    case 'dashed':
      return {
        background: lighter,
        '&:hover': {
          color: dark,
          borderColor: dark
        },
        ...commonShadow
      };
    case 'text':
    default:
      return {
        '&:hover': {
          color: dark,
          background: color === 'secondary' ? alpha(light, 0.1) : lighter
        },
        ...commonShadow
      };
  }
}

const IconButtonStyle = styled(MuiIconButton, {
  shouldForwardProp: (prop) => !['variant', 'shape', 'customColor'].includes(prop as string)
})<StyledIconButtonProps>(({ theme, variant = 'text', customColor = 'primary', shape }) => ({
  position: 'relative',
  '::after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    borderRadius: 4,
    opacity: 0,
    transition: 'all 0.5s'
  },

  ':active::after': {
    position: 'absolute',
    borderRadius: 4,
    left: 0,
    top: 0,
    opacity: 1,
    transition: '0s'
  },

  ...getColorStyle({ variant, theme, color: customColor }),

  ...(shape === 'rounded' && {
    borderRadius: '50%',
    '::after': { borderRadius: '50%' },
    ':active::after': { borderRadius: '50%' }
  }),

  ...(variant === 'outlined' && {
    border: '1px solid',
    borderColor: 'inherit'
  }),

  ...(variant === 'dashed' && {
    border: '1px dashed',
    borderColor: 'inherit'
  }),

  ...(variant !== 'text' && {
    '&.Mui-disabled': {
      background: theme.palette.grey[200],
      '&:hover': {
        background: theme.palette.grey[200],
        color: theme.palette.grey[300],
        borderColor: 'inherit'
      }
    }
  })
}));

export interface ExtendedIconButtonProps extends Omit<MuiIconButtonProps, 'color'> {
  variant?: IconButtonVariant;
  shape?: IconButtonShape;
  color?: ColorType;
  children: ReactNode;
}

const IconButton = forwardRef(
  (
    { variant = 'text', shape = 'square', children, color = 'primary', ...others }: ExtendedIconButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    return (
      <IconButtonStyle ref={ref} disableRipple variant={variant} shape={shape} customColor={color} {...others}>
        {children}
      </IconButtonStyle>
    );
  }
);

IconButton.displayName = 'IconButton';

export default IconButton;
