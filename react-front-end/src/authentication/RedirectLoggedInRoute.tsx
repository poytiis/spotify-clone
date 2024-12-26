import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import { checkLogInAjax } from '../integration/httpClient';
import { useEffect, useState } from 'react';

const RedirectLoggedInRoute = () => {
  const [isValid, setIsValid] = useState(false);
  const { isAuthenticated, login } = useAuth();
  
  useEffect(() => {
    const checkSession = async () => {
      if(isAuthenticated) {
        setIsValid(true);
      } else {
        if(!isAuthenticated) {
          const response = await checkLogInAjax();
          if (response?.email) {
            login(response.email); 
            setIsValid(true);
          }
        }
      }   
    }

    checkSession()
  }, [login, setIsValid]);
  
  return isValid ? <Navigate to="/" replace /> : <Outlet />;
};

export default RedirectLoggedInRoute;
