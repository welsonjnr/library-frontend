import React, { createContext, useState } from 'react';

export const AuthorizationContext = createContext();

export default function AuthorizationProvider(props) {

  const [ authorization, setAuthorization ] = useState();

  return <AuthorizationContext.Provider value={
    {
      authorization,
      setAuthorization
    }
  }>
    { props.children }
  </AuthorizationContext.Provider>

};
