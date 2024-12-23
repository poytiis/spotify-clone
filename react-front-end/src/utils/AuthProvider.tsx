import React, { createContext, useContext, ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../store/slices/userSlice';

const AuthContext = createContext<() => void>(() => {});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();

  const handleUnauthorized = () => {
    dispatch(logOut());
    if (window.location.pathname !== '/login') {
      window.history.pushState({}, '', '/login');
      window.location.reload();
    }
  };

  return (
    <AuthContext.Provider value={handleUnauthorized}>
      {children}
    </AuthContext.Provider>
  );
};

export const useHandleUnauthorized = () => {
  return useContext(AuthContext);
};