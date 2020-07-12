import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Register from './views/Pages/Register/Register';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
//const Register = React.lazy(() => import('./views/Pages/Register'));
const Registration = React.lazy(() => import('./views/Base/Registration/RegistrationFlow'));


class App extends Component {

  isAuthenticated = () =>{
    return localStorage.getItem('msal.idtoken') != null;
  }

  render() {
    return (
      <HashRouter>
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route path="/" name="Home" render={(props) => (
              //this.isAuthenticated() ? <DefaultLayout {...props}/> : <Login {...props}/>
              //this.isAuthenticated() ? <ListGroup {...props}/> : <Login {...props}/>  
              <Registration {...props}/> 
          )} />
        </Switch>
      </React.Suspense>
  </HashRouter>
    );
  }
}

export default App;
