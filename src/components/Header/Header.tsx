import React, { FC } from 'react';
import './Header.css';
import logo from '../../dist/rdc-logo-default.svg';

import BasicTabs from '../Header/HeaderTab';

import Box from '@mui/material/Box';
import {Grid, Hidden} from '@mui/material';
import ButtonLogin from './ButtonLogin';
import ButtonMenage from './ButtonMenage';





const Header: FC = () => {
    
    return (

        <Box  sx={{marginTop:1, marginLeft:2, marginRight:2}}>
        <Grid container spacing={1}  sx={{ display: 'flex',  justifyContent:'space-between'}}>
          <Grid item xs={1}  sm={1} md={1} lg={1} >
            
              <div className="header__logo">
                <a href="/" className="header__logo-picture">
                    <img
                        style={{ width: '142px', height: '42px' }}
                        src={logo}
                        alt=""
                    />
                </a>
            </div>  
            
          </Grid>
         
          
        <Grid item  xs={7} sm={7} md={7} lg={7}  className="table-screen">
          <BasicTabs></BasicTabs>  
        </Grid>
      
            
              
           
          
          <Grid item xs={2} sm={2} md={2} lg={2} className="large-screen">
            <ButtonMenage></ButtonMenage>
            
            
            
          </Grid >
          <Grid item xs={2} sm={2} md={2} lg={2}   className="login-screen" >
           
            
             <ButtonLogin></ButtonLogin>
            
          </Grid>
  </Grid>
  </Box>

    );
};

export default Header;
