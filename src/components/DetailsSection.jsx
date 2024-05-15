import React from "react";
import { Grid,Typography } from "@mui/material";

export const DetailsSection=()=>{
    return(
        <Grid container justifyContent="center"  alignItems="center" className="detailsSection"  direction="row">
            <Grid item sx={{color:'#000',my:'50px'}}>
            <Grid item xs={12}  md={12} >
                    <Typography variant="h4" > Adipisicing elit</Typography>
                    {/* <Typography variant="body1"sx={{mt:5}} >The greatest legacy we can leave our kids is happy memories</Typography> */}
                    <Typography variant="body1" >“Children need the freedom and time to play. Play is not a luxury. Play is a necessity."</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}