// material-ui
import { useTheme, Theme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'components/MainCard';

// types
interface CustomTheme extends Theme {
  customShadows: {
    z1: string;
    primaryButton: string;
    secondaryButton: string;
    successButton: string;
    warningButton: string;
    infoButton: string;
    errorButton: string;
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    info: string;
    error: string;
  };
}

interface ShadowBoxProps {
  shadow: string;
}

interface CustomShadowBoxProps {
  shadow: string;
  label: string;
  color?: string;
  bgcolor?: string;
}

// ===============================|| SHADOW BOX ||=============================== //

const ShadowBox: React.FC<ShadowBoxProps> = ({ shadow }) => {
  return (
    <MainCard border={false} shadow={shadow} boxShadow>
      <Stack sx={{ gap: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h6">boxShadow</Typography>
        <Typography variant="subtitle1">{shadow}</Typography>
      </Stack>
    </MainCard>
  );
};

// ===============================|| CUSTOM - SHADOW BOX ||=============================== //

const CustomShadowBox: React.FC<CustomShadowBoxProps> = ({ shadow, label, color, bgcolor }) => {
  return (
    <MainCard border={false} shadow={shadow} boxShadow sx={{ bgcolor: bgcolor || 'inherit' }}>
      <Stack sx={{ gap: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="subtitle1" color={color}>
          {label}
        </Typography>
      </Stack>
    </MainCard>
  );
};

// ============================|| COMPONENT - SHADOW ||============================ //

const ComponentShadow: React.FC = () => {
  const theme = useTheme() as CustomTheme;

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <MainCard title="Basic Shadow">
          <Grid container spacing={3}>
            {Array.from({ length: 25 }, (_, index) => (
              <Grid key={index} size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <ShadowBox shadow={index.toString()} />
              </Grid>
            ))}
          </Grid>
        </MainCard>
      </Grid>
      <Grid size={12}>
        <MainCard title="Custom Shadow">
          <Grid container spacing={3}>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <CustomShadowBox shadow={theme.customShadows.z1} label="z1" color="inherit" />
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
      <Grid size={12}>
        <MainCard title="Color Shadow">
          <Grid container spacing={3}>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <CustomShadowBox
                color={theme.palette.primary.contrastText}
                bgcolor={theme.palette.primary.main}
                shadow={theme.customShadows.primaryButton}
                label="primary"
              />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <CustomShadowBox
                color={theme.palette.secondary.contrastText}
                bgcolor={theme.palette.secondary.main}
                shadow={theme.customShadows.secondaryButton}
                label="secondary"
              />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <CustomShadowBox
                color={theme.palette.success.contrastText}
                bgcolor={theme.palette.success.main}
                shadow={theme.customShadows.successButton}
                label="success"
              />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <CustomShadowBox
                color={theme.palette.warning.contrastText}
                bgcolor={theme.palette.warning.main}
                shadow={theme.customShadows.warningButton}
                label="warning"
              />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <CustomShadowBox
                color={theme.palette.info.contrastText}
                bgcolor={theme.palette.info.main}
                shadow={theme.customShadows.infoButton}
                label="info"
              />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <CustomShadowBox
                color={theme.palette.error.contrastText}
                bgcolor={theme.palette.error.main}
                shadow={theme.customShadows.errorButton}
                label="error"
              />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <CustomShadowBox color={theme.palette.primary.main} shadow={theme.customShadows.primary} label="primary" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <CustomShadowBox color={theme.palette.secondary.main} shadow={theme.customShadows.secondary} label="secondary" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <CustomShadowBox color={theme.palette.success.main} shadow={theme.customShadows.success} label="success" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <CustomShadowBox color={theme.palette.warning.main} shadow={theme.customShadows.warning} label="warning" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <CustomShadowBox color={theme.palette.info.main} shadow={theme.customShadows.info} label="info" />
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <CustomShadowBox color={theme.palette.error.main} shadow={theme.customShadows.error} label="error" />
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default ComponentShadow;
