import React, { useState, useEffect } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ProtectedRoute from "./routes/ProtectedRoute";
import LoginRoute from "./routes/LoginRoute";
import './scss/style.scss';
import AuthorizationProvider from "./context/AuthorizationContext";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
// const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

const App = () => {

  const [ isAuthenticated, setIsAuthenticated ] = useState(false)

    return (
      <AuthorizationProvider>
        <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <LoginRoute exact path="/login" name="Login Page" redirect="/dashboard" render={props => <Login {...props}/>} />

              <ProtectedRoute path="/" name="Home" redirect="/login" isAuthenticated={isAuthenticated} render={props => <TheLayout {...props}/>} />
            </Switch>
          </React.Suspense>
        </HashRouter>
      </AuthorizationProvider>
    );
}

export default App;
