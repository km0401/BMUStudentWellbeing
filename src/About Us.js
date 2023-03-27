import { ThemeProvider } from '@emotion/react'
import { Typography, Grid, createTheme,Box} from '@mui/material';
import aboutUsImage from "./assets/Group 20.svg";
import React from 'react'

const theme = createTheme({
    typography:{
        fontFamily:'Poppins',
      button: {
        textTransform: 'none'
      }
    }
})

function AboutUs() {
  return (
    <ThemeProvider theme={theme}>
    <Box>
    <Typography variant="h4" style={{fontWeight:'600',textAlign:'center'}}>About Us</Typography>
    </Box>
    <Grid container spacing={2} sx={{justifyContent:'space-between', marginBottom:'50px', textAlign:{xs:'center',md:'left'}}}>
        <Grid item xs={12} md={4} sx={{margin:{xs:'60px 0 ',md:'0 0 0 50px'}}}>
        <img src={aboutUsImage} alt="about-us-svg"/>
        </Grid>
        <Grid item xs={12} md={6} sx={{margin:{xs:'0 40px', md:'50px 50px 0 0'}}}>
        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat ligula, scelerisque vel augue id, iaculis lobortis dui. Proin dignissim eleifend magna et ultrices. Suspendisse at risus diam. Donec fringilla leo vitae ante luctus, eget ultrices quam dictum. </Typography>
        <Typography mt={2}>Suspendisse at risus diam. Donec fringilla leo vitae ante luctus, eget ultrices quam dictum. Vestibulum ut justo turpis. Nam ut nibh dui. Vivamus rhoncus tellus erat. Fusce eu augue eget ipsum auctor varius et sed tellus. Nullam vitae dictum nulla. Duis porttitor fringilla blandit.</Typography>
        </Grid>
    </Grid>
    </ThemeProvider>
  )
}

export default AboutUs