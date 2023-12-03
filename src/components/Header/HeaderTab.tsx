import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


import { grey } from '@mui/material/colors';








interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p:3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

 
  
  return (
    <Box sx={{ width: '100%', paddingLeft:'20px'}}>
      <Box sx={{ borderColor: 'grey'  }}>
        <Tabs  value={value} onChange={handleChange} aria-label="basic tabs example" 
        textColor ='inherit'
        TabIndicatorProps={{
        style: {
        backgroundColor: 'black',
        
      },
    }}
    
    
   >
          <Tab label="Buy" {...a11yProps(0)} sx={{fontSize:'12px', fontWeight:'600', marginLeft: '-10px', marginRight: '-10px'}} />
          <Tab label="Sell" {...a11yProps(1)} sx={{fontSize:'12px',fontWeight:'600',marginLeft: '-10px', marginRight: '-10px'}} />
          <Tab label="Rent" {...a11yProps(2)} sx={{fontSize:'12px',fontWeight:'600',marginLeft: '-10px', marginRight: '-10px'}} />
          <Tab label="Mortrage" {...a11yProps(3)} sx={{fontSize:'12px',fontWeight:'600',marginLeft: '-10px', marginRight: '-10px'}} />
          <Tab label="Find Realtors" {...a11yProps(4)} sx={{fontSize:'12px',fontWeight:'600',marginLeft: '-10px', marginRight: '-10px'}} />
          <Tab label="My home" {...a11yProps(5)} sx={{fontSize:'12px',fontWeight:'600',marginLeft: '-10px', marginRight: '-10px'} }/>
          <Tab label="News&Insights" {...a11yProps(6)}sx={{fontSize:'12px',fontWeight:'600',marginLeft: '-10px', marginRight: '-10px'}}  />

        </Tabs>
      </Box>
      {/* <CustomTabPanel value={value} index={0}>
        
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
      
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
     
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
      
      </CustomTabPanel> */}
    </Box>
  );
}