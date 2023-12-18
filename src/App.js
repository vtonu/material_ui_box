import FixedContainer from './components/mainBox';
import Box from '@mui/material/Box';
import * as React from 'react';
import Button from '@mui/material/Button';

function App() {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}>
      <Box
        sx={{
          width: 540,
          height: 394,
          p: 1,
          m: 0,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.50'),
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
          border: '1px solid',
          borderColor: (theme) => (theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300'),
          borderRadius: 2,
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',
        }}>
        <Box sx={{ p: 1 }}>SAES V Disk</Box>
        <FixedContainer></FixedContainer>
        <Box sx={{ p: 1 }} display="flex" justifyContent="space-between">
          <Button variant="outlined" size="small">
            close
          </Button>
          <Button variant="outlined" size="small">
            start new life
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default App;
