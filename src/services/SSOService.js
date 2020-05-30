import * as Msal from 'msal';

export default class SSOService {

  constructor() {
    let redirectUri = `https://${document.domain}/`;
    const config = {
      auth: {
        clientId: process.env.REACT_APP_EnterpriseADAppClientID,
        redirectUri: redirectUri,
        postLogoutRedirectUri : redirectUri
      },
      cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: true
      },
      system: {
        tokenRenewalOffsetSeconds: 300
      }
    }

    this.loginRequest = {
      scopes: ["user.read"],
    }
    this.accessTokenRequest = {
      scopes: ["user.read"]
    }
    this.idTokenRequest = {
      scopes: [process.env.REACT_APP_EnterpriseADAppClientID]
    }

    this.app = new Msal.UserAgentApplication(config);
    this.app.handleRedirectCallback((error, response) => {

    });
  }

  login = () => {
    this.app.loginRedirect(this.loginRequest);
  };

  logout = () => {
    localStorage.clear();
    this.app.logout();
  };

  isLoggedIn = () => {
    return localStorage.getItem('msal.idtoken') != null;
  };
}
