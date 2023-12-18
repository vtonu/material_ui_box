import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: 'MONEY',
    label: 'cash',
  },
  {
    value: 'AMM',
    label: 'ammo',
  },
  {
    value: 'VEHICLE',
    label: 'cars',
  },
  {
    value: 'PROPS',
    label: 'properties',
  },
];

export default function SelectTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '15ch' },
      }}
      noValidate
      autoComplete="off">
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="AMM"
          size="small"
          /* helperText="Please select type" */
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
