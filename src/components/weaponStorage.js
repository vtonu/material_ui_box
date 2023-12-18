import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import SelectTextFields from './ammoTypeSelect';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import EastOutlined from '@mui/icons-material/EastOutlined';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid xs>
          <Item>Current Weapons</Item>
        </Grid>
        <Grid xs={4}>
          <Item>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <EastOutlined></EastOutlined>
              <SelectTextFields></SelectTextFields>
              <WestOutlinedIcon></WestOutlinedIcon>
              <Button variant="outlined" size="small">
                done
              </Button>
            </Box>
          </Item>
        </Grid>
        <Grid xs>
          <Item>Storage</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
