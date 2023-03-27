import React,{Component} from 'react';
import Header from "./Header";
import HeroBanner from './HeroBanner';
import { Auth0Provider } from "@auth0/auth0-react";
import { Box } from '@mui/material';
import BlogCarousel from './BlogCarousel';
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
<BlogCarousel/>
</Auth0Provider>
      )
    }
  }

  export default App;