import React,{Component} from 'react';
import Header from "./Header";
import HeroBanner from './HeroBanner';
import { Auth0Provider } from "@auth0/auth0-react";
<<<<<<< HEAD
import BlogCarousel from './BlogCarousel';
import MeetOurDoctors from './MeetOurDoctors';
class App extends Component{
    render(){
      return (
        <Auth0Provider
          domain='dev-404dtec71j6qzjx6.us.auth0.com'
          clientId='gBPCm4tysf1C0kUl2qUT4O2wj4S1LoV3'
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <Header />
          <HeroBanner />
          <MeetOurDoctors/>
          <BlogCarousel />
        </Auth0Provider>
=======
import { Box } from '@mui/material';
import BlogCarousel from './BlogCarousel';
import AboutUs from './About Us';
// import BlogCard from './BlogCard';

class App extends Component{
    render(){
      return(
        <Auth0Provider domain="dev-404dtec71j6qzjx6.us.auth0.com"
    clientId="gBPCm4tysf1C0kUl2qUT4O2wj4S1LoV3"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
<Header/>
<HeroBanner/>
<AboutUs/>
<BlogCarousel/>
</Auth0Provider>
>>>>>>> 586527e7ea732dfe9678ea75b54dae6c40ef17d9
      )
    }
  }

  export default App;