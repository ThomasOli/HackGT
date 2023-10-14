import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';


root.render(
<Auth0Provider
    domain="dev-rwx6z2jpxavtx776.us.auth0.com"
    clientId="VWY9lV7viWoamw901quAY5MMXNb0NqiW"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);

export default root;