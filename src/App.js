import React,{Component} from 'react';
import Header from "./Header";
import HeroBanner from './HeroBanner';
import { Auth0Provider } from "@auth0/auth0-react";
import BlogCarousel from './BlogCarousel';
import AboutUs from './About Us';
import MeetOurDoctors from './MeetOurDoctors.js'
import Footer from './Footer.js'
import BookAppointment from './BookAppointment';
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@emotion/react';
import CustomizedTables from "./CustomizedTables";

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
  },
})
class App extends Component{
    render(){
      return(
        <ThemeProvider theme={theme}>
        <Auth0Provider domain="dev-404dtec71j6qzjx6.us.auth0.com"
    clientId="gBPCm4tysf1C0kUl2qUT4O2wj4S1LoV3"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
<Header/>
<HeroBanner/>
<AboutUs/>
<BookAppointment/>
<MeetOurDoctors/>
<BlogCarousel/>
<CustomizedTables/>
<Footer/>
</Auth0Provider>
</ThemeProvider>
      )
    }
  }

  export default App;