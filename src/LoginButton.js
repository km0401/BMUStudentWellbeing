import { Hidden,Button,Box } from '@mui/material'
import React from 'react';
import { styled } from '@mui/system';
import { useAuth0 } from '@auth0/auth0-react';

const BootstrapButton = styled(Button)({
    borderRadius:'20px',
    fontSize:"12px",
    fontWeight:'350',
    padding: '6px 25px',
    marginTop:'-8px'});

function LoginButton() {
    const { loginWithRedirect } = useAuth0();
    // const [auth, setAuth] = React.useState(false);
    // const handleChange = () => {
    //     setAuth(true);
    //   };
  return (
    <>
        <Hidden mdDown>
        <Box sx={{ml:{xl:0.5,lg:0.5,md:0},display: 'flex',flexWrap: 'wrap', justifyContent: 'space-between',typography: 'button','& > :not(style) + :not(style)': {ml:{xl:2,lg:1,md:0.5,sm:2}}}}>
            <BootstrapButton variant="contained" size="small" color="accent" sx={{color:'#ffffff', paddingLeft:{xl:'32px',lg:'25px',md:'15px'},paddingRight:{xl:'30px',lg:'25px',md:'15px'},fontSize:{xl:'20px'}}}>Sign Up</BootstrapButton> 
            <BootstrapButton onClick={() => {loginWithRedirect()}} variant="outlined" size="small" color="accent" sx={{paddingLeft:{xl:'32px',lg:'25px',md:'15px'},paddingRight:{xl:'30px',lg:'25px',md:'15px'},fontSize:{xl:'20px'}}}>Sign In</BootstrapButton>
            </Box>
        </Hidden>
        <Hidden mdUp>
            <BootstrapButton onClick={() =>{ loginWithRedirect()}} variant="contained" size="small" color="accent" sx={{color:'#ffffff',paddingLeft:'15px',paddingRight:'15px'}}>Sign In</BootstrapButton>
            </Hidden>
    </>
  )
}

export default LoginButton
