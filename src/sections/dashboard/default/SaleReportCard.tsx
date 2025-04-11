import { useState, ChangeEvent } from 'react';

// material-ui
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// project imports
import SalesChart from 'sections/dashboard/SalesChart';

interface StatusOption {
  value: string;
  label: string;
}

// sales report status
const status: StatusOption[] = [
  {
    value: 'today',
    label: 'Today'
  },
  {
    value: 'month',
    label: 'This Month'
  },
  {
    value: 'year',
    label: 'This Year'
  }
];

// ==============================|| DEFAULT - SALES REPORT ||============================== //

const SaleReportCard: React.FC = () => {
  const [value, setValue] = useState<string>('today');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid>
          <Typography variant="h5">Sales Report</Typography>
        </Grid>
        <Grid>
          <TextField
            id="standard-select-currency"
            size="small"
            select
            value={value}
            onChange={handleChange}
            sx={{ '& .MuiInputBase-input': { py: 0.75, fontSize: '0.875rem' } }}
          >
            {status.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
      <SalesChart />
    </>
  );
};

export default SaleReportCard;
