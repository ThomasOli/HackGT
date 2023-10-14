import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';


const Auth = ({ children }) => {
    return (
      <Auth0Provider
        domain="dev-rwx6z2jpxavtx776.us.auth0.com"
        clientId="VWY9lV7viWoamw901quAY5MMXNb0NqiW"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        {children}
      </Auth0Provider>
    );
};
  
export default Auth;