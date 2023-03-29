import React from 'react';
import { styled } from '@mui/system';
import { Grid,Box, Typography,Button } from '@mui/material';
import BannerImage from "./assets/Group 11.svg";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({ 
    palette: {
        primary: {
          main: "#ffffff",
        },
        secondary: {
          main: "#907BFF",
        },
        tertiary:{
            main:"#E5ECFA",
        },
        accent:{
          main:"#000000",
        }
      },     
    typography: {
      fontFamily:'Poppins',
      button: {
        textTransform: 'none'
      }
    }
  });

  const BootstrapButton = styled(Button)({
    borderRadius:'20px',
    fontSize:"12px",
    fontWeight:'350',
    padding: '6px 25px',
    });

function HeroBanner() {
  return (
<ThemeProvider theme={theme}>
<Box>
    <Grid container sx={{padding:{md:'50px 80px',xs:'50px 50px'},textAlign:{xs:'center',md:'start'}}} spacing={1}>
    <Grid item xs={12} md={5}>
        <Box sx={{borderRadius:'8px',textAlign:'center',backgroundColor:'#E5ECFA',color:'#907BFF',padding:'5px 30px',width:{sm:'320px',xs:'250px'},margin:{md:'0 0 10px 0',xs:'0 auto 10px auto'}}}>
        <Typography variant="subtitle2" sx={{fontSize:'13px',fontWeight:'600'}}>BML Munjal University Student Wellbeing Centre</Typography>
        </Box>
        <Box mb={2}>
        <Typography sx={{textAlign:{md:'left',xs:'center'},fontSize:'43px',fontWeight:'600'}}>
        Lorem Ipsum dolor sit
        amet consectetur
        adipiscing elit
        </Typography>
        </Box>
        <Box mb={2}>
            <Typography sx={{textAlign:{md:'left',xs:'center'},fontSize:'14px',fontWeight:'300'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat ligula, scelerisque vel augue id, iaculis lobortis dui. Proin dignissim eleifend magna et ultrices</Typography>
        </Box>
        <Box sx={{textAlign:{md:'left',xs:'center'}}}>
        <BootstrapButton variant="contained" size="small" color="secondary" sx={{paddingLeft:{xl:'40px',lg:'25px',md:'15px'},paddingRight:{xl:'40px',lg:'25px',md:'15px'},fontSize:{xl:'20px'}}}>Book Consultation Now</BootstrapButton>
        </Box>
        </Grid>
    <Grid item xs={12} md={5}>
    <img src={BannerImage} sx={{width:{xs:'300px'}, height: {xs:'150px'}}} alt='Hero Banner'></img>
    </Grid>
    </Grid>
    </Box>
    </ThemeProvider>
  )
}

export default HeroBanner
// md:'657px',
// md:'371px',