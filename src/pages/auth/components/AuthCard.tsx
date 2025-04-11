import { ReactNode } from 'react';
import Box from '@mui/material/Box';

// project imports
import MainCard from 'components/MainCard';

// ==============================|| AUTHENTICATION - CARD WRAPPER ||============================== //

interface AuthCardProps {
  children: ReactNode;
  [key: string]: any; // for ...other props
}

export default function AuthCard({ children, ...other }: AuthCardProps): JSX.Element {
  return (
    <MainCard
      sx={{ maxWidth: { xs: 400, sm: 475 }, margin: { xs: 2.5, md: 3 }, '& > *': { flexGrow: 1, flexBasis: '50%' } }}
      content={false}
      {...other}
      border={false}
      boxShadow
      shadow={(theme) => theme.customShadows.z1}
    >
      <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>{children}</Box>
    </MainCard>
  );
}
