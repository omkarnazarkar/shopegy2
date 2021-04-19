import React from 'react';

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ value, children }) => (
  <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
);

