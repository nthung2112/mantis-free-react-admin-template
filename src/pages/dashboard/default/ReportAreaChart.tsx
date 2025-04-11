// material-ui
import { useTheme, Theme } from '@mui/material/styles';

import { chartsGridClasses, LineChart } from '@mui/x-charts';

const data: number[] = [58, 115, 28, 83, 63, 75, 35];
const labels: string[] = ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

interface ChartSeries {
  data: number[];
  showMark: boolean;
  id: string;
  color: string;
  label: string;
  type?: 'line';
}

// ==============================|| REPORT AREA CHART ||============================== //

const ReportAreaChart: React.FC = () => {
  const theme = useTheme();
  const axisFonstyle = { fill: theme.palette.text.secondary };

  const chartSeries: ChartSeries[] = [
    {
      data,
      showMark: false,
      id: 'ReportAreaChart',
      color: theme.palette.warning.main,
      label: 'Series 1',
      type: 'line'
    }
  ];

  return (
    <LineChart
      grid={{ horizontal: true }}
      xAxis={[{ data: labels, scaleType: 'point', disableLine: true, disableTicks: true, tickLabelStyle: axisFonstyle }]}
      yAxis={[{ tickMaxStep: 10 }]}
      leftAxis={null}
      series={chartSeries}
      slotProps={{ legend: { hidden: true } }}
      height={340}
      margin={{ top: 30, bottom: 50, left: 20, right: 20 }}
      sx={{ '& .MuiLineElement-root': { strokeWidth: 1 }, [`& .${chartsGridClasses.line}`]: { strokeDasharray: '5 3' } }}
    />
  );
};

export default ReportAreaChart;
