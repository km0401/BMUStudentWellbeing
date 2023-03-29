import React from 'react'
import Box from '@mui/material/Box'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Link,
  Hidden,
} from '@mui/material'
import { Stack } from '@mui/system'
import { styled } from '@mui/system'
import BMULogo from './assets/bml-color-logo.svg'
import LoginMenu from './LoginMenu'
import Authentication from './Authentication'

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#907BFF',
    },
    accent: {
      main: '#000000',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    button: {
      textTransform: 'none',
    },
  },
})

const BootstrapButton = styled(Button)({
  borderRadius: '20px',
  fontSize: '12px',
  fontWeight: '350',
  padding: '6px 25px',
  marginTop: '-8px',
})

function Header() {
  // const { loginWithRedirect } = useAuth0();

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position='static'
        elevation='0'
        color='primary'
        sx={{ fontFamily: 'Poppins', paddingTop: { md: '5px', xs: '18px' } }}
      >
        {/* <Container maxWidth='xl'> */}
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Hidden mdUp>
            <LoginMenu />
          </Hidden>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <img
              src={BMULogo}
              style={{ width: '122px', height: '45px' }}
              alt='BML Munjal University'
            ></img>
            <Hidden smDown>
              <Box sx={{ marginLeft: { xl: 6, lg: 5, md: 1, sm: 3 } }} />
              <Stack
                spacing={-0.5}
                sx={{ marginTop: { xs: '10px', md: '0px' } }}
              >
                <Typography
                  variant='caption'
                  align='center'
                  sx={{
                    fontWeight: '700',
                    fontSize: { xl: '17px', md: '12px', xs: '10px' },
                  }}
                >
                  +91 9785182311
                </Typography>
                <Typography
                  variant='caption'
                  align='center'
                  sx={{
                    fontWeight: '700',
                    fontSize: { xl: '17px', md: '12px', xs: '10px' },
                  }}
                >
                  medical.bmu@edu.in
                </Typography>
              </Stack>
            </Hidden>
          </Box>
          <Hidden mdDown>
            <Box
              sx={{
                ml: { xl: 6, lg: 5, md: 0.5 },
                mr: { xl: 2, lg: 2, md: 0.5 },
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                typography: 'button',
                '& > :not(style) + :not(style)': {
                  ml: { xl: 5.5, lg: 7, md: 1.5 },
                },
                cursor: 'pointer',
              }}
              // onClick={preventDefault}
            >
              <Link
                variant='subtitle2'
                color='accent'
                underline='none'
                sx={{ fontWeight: '375', fontSize: { xl: '20px' } }}
              >
                Home
              </Link>
              <Link
                variant='subtitle2'
                color='accent'
                underline='none'
                sx={{ fontWeight: '375', fontSize: { xl: '20px' } }}
              >
                About Us
              </Link>
              <Link
                variant='subtitle2'
                color='accent'
                underline='none'
                sx={{ fontWeight: '375', fontSize: { xl: '20px' } }}
              >
                Blogs
              </Link>
              <Link
                variant='subtitle2'
                color='accent'
                underline='none'
                sx={{ fontWeight: '375', fontSize: { xl: '20px' } }}
              >
                Contact Us
              </Link>
              <BootstrapButton
                variant='contained'
                size='small'
                color='secondary'
                sx={{
                  paddingLeft: { xl: '40px', lg: '25px', md: '15px' },
                  paddingRight: { xl: '40px', lg: '25px', md: '15px' },
                  fontSize: { xl: '20px' },
                }}
              >
                Book an Appointment
              </BootstrapButton>
            </Box>
          </Hidden>
          <Authentication />
        </Toolbar>
        {/* </Container> */}
      </AppBar>
    </ThemeProvider>
  )
}

export default Header

// const preventDefault = (event) => event.preventDefault();
