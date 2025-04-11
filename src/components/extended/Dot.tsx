import { CSSProperties } from 'react';
import { useTheme, SxProps, Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';

// project imports
import getColors from 'utils/getColors';
import { ColorType } from 'types/menu';

interface DotProps {
  color?: ColorType | string;
  size?: number;
  variant?: 'outlined' | 'filled';
  sx?: SxProps<Theme>;
}

const Dot = ({ color, size = 8, variant = 'filled', sx = {} }: DotProps) => {
  const theme = useTheme();
  const colors = getColors(theme, color || 'primary');
  const { main } = colors;

  return (
    <Box
      sx={{
        width: size,
        height: size,
        borderRadius: '50%',
        ...(variant === 'outlined' ? { border: `1px solid ${main}` } : { bgcolor: main }),
        ...sx
      }}
    />
  );
};

export default Dot;
