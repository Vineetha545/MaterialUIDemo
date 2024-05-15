import React, { useState }  from "react"
import { Grid, Typography,Stack,Box,Rating } from "@mui/material"
import ImageHeart from '../assets/act1-heart.jpg'
import KidsColor from '../assets/act2-kids.jpg'
import ImageColoring from '../assets/act3-kids.jpg'
import ImagePlay from '../assets/act4-kids.jpg'



import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const ImageHolderComp=()=>{

    const dataImages = [
        {
          src:ImageHeart, 
          title: "Creative Time",
          description: "4.21M views",
          rate:"3",
        },
        {
          src: KidsColor,
          title: "Fun Time",
          description: "4.74M views",
          rate:"4",
        },
        // {
        //   src:ImageColoring,
        //   title: "Fun Time",
        //   description: "3.98M views",
        //   rate:"5",
        // },
        {
            src:ImagePlay,
            title: "Play Time",
            description: "3.98M views",
            rate:"3",
          }
       
      ];
    return(
    <Stack  spacing={4} className="image_container" justifyContent={'center'} alignContent={'center'} sx={{p:'20px'}}>
         <Grid item xs={12}  md={6} >
            <Typography level="h6"  >The greatest legacy we can leave our kids is happy memories</Typography>
        </Grid> 
        <Grid container  rowSpacing={2} justifyContent={'space-around'} alignContent={'center'}  className="caroselContainer">           
                {dataImages.map((Image,index)=>(
                     <Grid item xs={12}   md={3}  justifyContent={'center'} alignContent={'center'}  >                        
                        <Box className="imageCarosel">                           
                            <img src={Image.src}  height={'200px'} alt={Image.title}/>
                            <Stack direction={{ xs: 'column', sm: 'row' }}>
                                <Stack justifyContent={'start'} alignContent={'start'} >
                                    <Typography>{Image.title}</Typography>
                                </Stack>
                                <Stack justifyContent={"end"} alignContent={'end'} >
                                <Rating value={Image.rate}    sx={{ml:'auto'}}                                  
                                    icon={<FavoriteIcon color="#FFC94A" fontSize="inherit"/>}
                                    emptyIcon={<FavoriteBorderIcon/>}               
                                    />
                                </Stack>
                            </Stack>
                           
                        </Box>                   
                </Grid>))}           
        </Grid>     
    </Stack>
    )
}