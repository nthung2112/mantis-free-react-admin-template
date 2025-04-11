// material-ui
import { useTheme, Theme } from '@mui/material/styles';

import { BarChart } from '@mui/x-charts/BarChart';

const data: number[] = [80, 95, 70, 42, 65, 55, 78];
const xLabels: string[] = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

// ==============================|| MONTHLY BAR CHART ||============================== //

const MonthlyBarChart: React.FC = () => {
  const theme = useTheme();
  const axisFonstyle = { fontSize: 10, fill: theme.palette.text.secondary };

  return (
    <BarChart
      height={380}
      series={[{ data, label: 'Series-1', type: 'bar' as const }]}
      xAxis={[{ data: xLabels, scaleType: 'band', disableLine: true, disableTicks: true, tickLabelStyle: axisFonstyle }]}
      leftAxis={null}
      slotProps={{ legend: { hidden: true }, bar: { rx: 5, ry: 5 } }}
      axisHighlight={{ x: 'none' }}
      margin={{ left: 20, right: 20 }}
      colors={[theme.palette.info.light]}
      sx={{ '& .MuiBarElement-root:hover': { opacity: 0.6 } }}
    />
  );
};

export default MonthlyBarChart;
