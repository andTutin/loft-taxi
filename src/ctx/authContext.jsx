import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState(false);

  const login = (email, password) => {
    setLoginStatus(true);
  };

  const logout = () => {
    setLoginStatus(false);
  };

  return (
    <AuthContext.Provider
      value={{
        loginStatus,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
