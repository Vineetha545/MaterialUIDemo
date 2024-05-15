import React, { useState } from 'react'
import { AppBar, Button, Grid, Typography,useTheme,useMediaQuery } from "@mui/material"
import Toolbar from '@mui/material/Toolbar';
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { DrawerComp } from './DrawerComp';



export const NavHeader=({links})=>{
    const [TabValue, SetTabValue ]= useState(0);
    const theam = useTheme();
    const isMatch = useMediaQuery(theam.breakpoints.down('md'));
    return(
    <AppBar className='appContainer'  position="fixed"  sx={{background:'#FFC94A' }}>
        <Toolbar   >
            { isMatch ? <>
                <DrawerComp links={links}></DrawerComp>
            </>:
            <Grid sx={{placeItems:'center'}} container>
                <Grid item xs={1}>
                    <Typography><BedroomBabyIcon fontSize='large'/></Typography>
                </Grid>
                <Grid item xs={6}>
                    <Tabs  display='flex' textColor='#453F78' value={TabValue} onChange={(e,val)=>SetTabValue(val)}>
                       {links.map((link,index)=>(<Tab  key={index} label={link}></Tab>))}
                    </Tabs>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={3}>
                    <Box display="flex">
                        <Button  variant='contained' className='hederBtn' sx={{marginLeft:'auto'}}>Login</Button>
                        <Button variant='contained'  className='hederBtn' sx={{marginLeft:1}} >SignUp</Button>
                       
                    </Box>
                </Grid>                
            </Grid>
           
            }
        </Toolbar>
    </AppBar>
    )
}