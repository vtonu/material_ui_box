import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
        <Box sx={{ p: 3 }}>
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
    <Box sx={{ flexGrow: 1, display: 'flexbox', height: 300 }}>
      <Tabs value={value} onChange={handleChange} aria-label="Disk Tabs">
        <Tab label="Item One" {...a11yProps(0)} sx={{ borderRight: 1, borderColor: 'divider' }} />
        <Tab label="Item Two" {...a11yProps(1)} sx={{ borderRight: 1, borderColor: 'divider' }} />
        <Tab label="Item Three" {...a11yProps(2)} sx={{ borderRight: 1, borderColor: 'divider' }} />
      </Tabs>
      <TabPanel value={value} index={0}>
        1
      </TabPanel>
      <TabPanel value={value} index={1}>
        2
      </TabPanel>
      <TabPanel value={value} index={2}>
        3
      </TabPanel>
    </Box>
  );
}
