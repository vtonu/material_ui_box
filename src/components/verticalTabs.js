import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AccessibleTable from './vehicleStorage';
import AutoGrid from './weaponStorage';
import Button from '@mui/material/Button';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'flexbox', height: 400 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Disk Tabs"
        textColor="primary"
        indicatorColor="secondary">
        <Tab
          label="Safe"
          {...a11yProps(0)}
          sx={{ borderRight: 1, borderBottom: 1, borderColor: 'divider' }}
        />
        <Tab
          label="Vehicle Storage"
          {...a11yProps(1)}
          sx={{ borderRight: 1, borderBottom: 1, borderColor: 'divider' }}
        />
        <Tab
          label="Weapon Storage"
          {...a11yProps(2)}
          sx={{ borderRight: 1, borderBottom: 1, borderColor: 'divider' }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Box>
          <Box sx={{ p: 1 }}>Address: 123 Street Dr.</Box>
          <Box sx={{ p: 1 }}>Market Value: $0 (min $0, max $0)</Box>
          <Box sx={{ p: 1 }}>Owner: [saes]disk ([saes]disk) </Box>
          <Box sx={{ p: 1 }}>
            Status:{' '}
            <Box sx={{ color: '#2196f3' }}>This is a public place for weapons and vehicles.</Box>{' '}
          </Box>
          <Box sx={{ p: 1 }}>
            Daily Expenses: <Box sx={{ color: '#d50000' }}>$0 (including $0 tax)</Box>{' '}
          </Box>
          <Box sx={{ display: 'flexbox' }}>
            <Button variant="outlined" size="small" sx={{ m: 1 }}>
              Sell
            </Button>
            <Button variant="outlined" size="small" sx={{ m: 1 }}>
              Buy
            </Button>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box>
          <Box sx={{ p: 0.5, height: 225, overflow: 'auto' }}>
            <AccessibleTable></AccessibleTable>
          </Box>
          <Box sx={{ display: 'flexbox' }}>
            <Button variant="outlined" size="small" sx={{ m: 1 }}>
              Park Vehicle
            </Button>
            <Button variant="outlined" size="small" sx={{ m: 1 }}>
              Repair Vehicle
            </Button>
            <Button variant="outlined" size="small" sx={{ m: 1 }}>
              Spawn Vehicle
            </Button>
            <Button variant="outlined" size="small" sx={{ m: 1 }}>
              Repair All Vehicles
            </Button>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box>
          <AutoGrid></AutoGrid>
        </Box>
      </TabPanel>
    </Box>
  );
}
