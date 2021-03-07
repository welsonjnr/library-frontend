import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthorizationContext } from "../context/AuthorizationContext";

export default (props) => {

  const { authorization } = useContext( AuthorizationContext )

  return authorization ? <Route {...props} /> : <Redirect to={props.redirect} />
  // return <Route {...props} />
}
