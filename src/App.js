import FixedContainer from './components/mainBox';
import Box from '@mui/material/Box';
import * as React from 'react';

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
          width: 550,
          height: 350,
          p: 1,
          m: 5,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.50'),
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
          border: '1px solid',
          borderColor: (theme) => (theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300'),
          borderRadius: 2,
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',
        }}>
        SAES Disk
        <FixedContainer></FixedContainer>
      </Box>
    </div>
  );
}

export default App;
