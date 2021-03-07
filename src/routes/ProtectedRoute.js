import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthorizationContext } from "../context/AuthorizationContext";


const ProtectedRoute = (props) => {

  const { authorization } = useContext( AuthorizationContext )

  return !authorization ? <Route {...props}>
    {props.children}
    </Route> : <Redirect to="/login"/>
}

export default ProtectedRoute
