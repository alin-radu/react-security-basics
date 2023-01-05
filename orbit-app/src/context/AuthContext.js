import React, { createContext, useState } from 'react';

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    expiresAt: null,
    userInfo: {},
  });

  const setAuthInfo = (data) => {
    const { token, userInfo, expiresAt } = data;
    setAuthState({ token, userInfo, expiresAt });
  };

  const value = {
    authState,
    setAuthState: setAuthInfo,
  };

  return <Provider value={value}>{children}</Provider>;
};

export { AuthContext, AuthProvider };
