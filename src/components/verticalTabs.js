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
    <Box sx={{ display: 'flexbox', height: 300 }}>
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
        <Box sx={{ p: 1 }}>Address: 123 Street Dr</Box>
        <Box sx={{ p: 1 }}>Market Value: $1,000,000</Box>
        <Box sx={{ p: 1 }}>Owner: [saes]disk </Box>
        <Box sx={{ p: 1 }}>Status: This is a public place for weapons and vehicles. </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box sx={{ p: 0.5, height: 225, overflow: 'auto' }}>
          <AccessibleTable></AccessibleTable>
          <Button variant="outlined" size="small">
            Park Vehicle
          </Button>
          <Button variant="outlined" size="small">
            Repair Vehicle
          </Button>
          <Button variant="outlined" size="small">
            Spawn Vehicle
          </Button>
          <Button variant="outlined" size="small">
            Repair All Vehicles
          </Button>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box sx={{ p: 0.5, height: 225, overflow: 'hidden' }}>
          <AutoGrid></AutoGrid>
        </Box>
      </TabPanel>
    </Box>
  );
}
