import React from "react"
import { Grid, Typography } from "@mui/material"
import posterImage from '../assets/slide-kid.jpg'

export const PosterSlider=()=>{
    const myStyle = {
        backgroundImage: `url(${posterImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: '100vh',
            };
    return(       
        <Grid container justifyContent={'end'}  alignItems="center" direction="row" className="posterGridHolder" sx={myStyle}> 
         
            <Grid item xs={12}  md={6} sx={{p:'10px', color:"#795458",background:'rgba(0, 0, 0, 0.04)'}} justifyContent={'center'} alignItems="center" className="posterGrid">
                <Typography variant="h4" > Consectetur</Typography>
                <Typography variant="body1" sx={{mt:5}} >Play gives children a chance to practice what they are learning.</Typography>
            </Grid>
        </Grid>     
    )
}