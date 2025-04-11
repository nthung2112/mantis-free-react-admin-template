import { forwardRef, ReactNode, CSSProperties } from 'react';

// material-ui
import { Theme, SxProps } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';

// Extend the Theme type to include customShadows
declare module '@mui/material/styles' {
  interface Theme {
    customShadows: {
      z1: string;
    };
  }
}

// Types
interface MainCardProps {
  border?: boolean;
  boxShadow?: boolean;
  children?: ReactNode;
  content?: boolean;
  contentSX?: SxProps<Theme>;
  darkTitle?: boolean;
  divider?: boolean;
  elevation?: number;
  secondary?: ReactNode;
  shadow?: string;
  sx?: SxProps<Theme>;
  title?: ReactNode | string;
  codeHighlight?: boolean;
  codeString?: string;
  modal?: boolean;
  subheader?: ReactNode;
  [key: string]: any; // for ...others props
}

// header style
const headerSX = {
  p: 2.5,
  '& .MuiCardHeader-action': { m: '0px auto', alignSelf: 'center' }
};

const MainCard = forwardRef<HTMLDivElement, MainCardProps>(function MainCard(
  {
    border = true,
    boxShadow,
    children,
    content = true,
    contentSX = {},
    darkTitle,
    divider = true,
    elevation,
    secondary,
    shadow,
    sx = {},
    title,
    codeHighlight = false,
    codeString,
    modal = false,
    subheader,
    ...others
  },
  ref
) {
  return (
    <Card
      elevation={elevation || 0}
      sx={[
        (theme: Theme) => ({
          position: 'relative',
          border: border ? '1px solid' : 'none',
          borderRadius: 1,
          borderColor: 'grey.A800',
          boxShadow: boxShadow && !border ? shadow || theme.customShadows.z1 : 'inherit',
          ':hover': {
            boxShadow: boxShadow ? shadow || theme.customShadows.z1 : 'inherit'
          },
          ...(modal && {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: `calc(100% - 50px)`, sm: 'auto' },
            maxWidth: 768,
            '& .MuiCardContent-root': { overflowY: 'auto', minHeight: 'auto', maxHeight: `calc(100vh - 200px)` }
          })
        }),
        sx
      ]}
      ref={ref}
      {...others}
    >
      {/* card header and action */}
      {!darkTitle && title && (
        <CardHeader sx={headerSX} slotProps={{ title: { variant: 'subtitle1' } }} title={title} action={secondary} subheader={subheader} />
      )}

      {/* content & header divider */}
      {title && divider && <Divider />}

      {/* card content */}
      {content && <CardContent sx={contentSX}>{children}</CardContent>}
      {!content && children}

      {/* card footer - clipboard & highlighter  */}
      {/* {codeString && (
        <>
          <Divider sx={{ borderStyle: 'dashed' }} />
          <Highlighter codeString={codeString} codeHighlight={codeHighlight} />
        </>
      )} */}
    </Card>
  );
});

export default MainCard;
