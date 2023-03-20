import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import ProfileIcon from './ProfileIcon';

function Authentication() {
    const {isAuthenticated} = useAuth0();
  return isAuthenticated ? <ProfileIcon/> : <LoginButton/>;
}
export default Authentication