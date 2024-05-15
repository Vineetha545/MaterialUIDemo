import React, { useState } from "react"
import { Drawer, List, ListItemButton, ListItemText,IconButton,Typography } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';
export const DrawerComp=({links})=>{
    const[drawerOpen,SetdrawerOpen]=useState(false)
    
    return(
        <>  <Typography><BedroomBabyIcon fontSize='large'/></Typography>
            <Drawer  PaperProps={{sx:{background :'#795458'}}} className="drawerDiv" open={drawerOpen} onClose={()=>SetdrawerOpen(true)}>

                {links.map((link,index)=>(<List><ListItemButton  key={index} divider onClick={()=>SetdrawerOpen(false)}><ListItemText sx={{color:'white'}}>{link}</ListItemText></ListItemButton></List>))}
            </Drawer>
            <IconButton sx={{marginLeft:"auto",color:'white'}} aria-label="drawer" onClick={()=>SetdrawerOpen(true)}>
                    <MenuRoundedIcon color='warning'></MenuRoundedIcon>
            </IconButton>
       
        </>
    )
}