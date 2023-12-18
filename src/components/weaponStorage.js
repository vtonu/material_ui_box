import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';

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
        <Grid xs={2}>
          <Item>
            <Button variant="outlined" size="small">
              done
            </Button>
          </Item>
        </Grid>
        <Grid xs>
          <Item>Storage</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
