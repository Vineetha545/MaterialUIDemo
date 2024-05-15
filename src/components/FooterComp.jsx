import React from "react";
import { Grid,IconButton,Typography,Box, Stack, Divider } from "@mui/material";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
export const FooterComp=()=>{
    return(
        <Stack className="footerSection" > 
            <Grid container >
                <Grid item xs={12} sx={{mt:'8px'}}>
                    <item>
                        <Typography variant="subtitle2">Follow Us </Typography>
                        <IconButton >
                            <FacebookOutlinedIcon  sx={{color:'#fff'}}/>
                        </IconButton>
                        <IconButton>
                            <InstagramIcon  sx={{color:'#fff'}}/>
                        </IconButton>
                        <IconButton>
                            <LinkedInIcon  sx={{color:'#fff'}}/>
                        </IconButton>
                        <IconButton>
                            <TwitterIcon sx={{color:'#fff'}}/>
                        </IconButton>
                    </item>
                </Grid>
                <Grid item xs={12} textAlign={"center"} sx={{my:'8px'}} >
                    <item>
                        <Typography variant="body2"  sx={{textAlign:'center', color:'#fff'}}>Copyright © dummy porject Ltd. All rights reserved</Typography>
                    </item>
                </Grid>
            </Grid>
            
        </Stack>
        )
}