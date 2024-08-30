// context/VerifyContext.js
import React, { createContext, useContext } from 'react';
import useVerify from '../hooks/useVerify';

const VerifyContext = createContext();

export const VerifyProvider = ({ children }) => {
  const verifyState = useVerify();
  return (
    <VerifyContext.Provider value={verifyState}>
      {children}
    </VerifyContext.Provider>
  );
};

export const useVerifyContext = () => useContext(VerifyContext);
