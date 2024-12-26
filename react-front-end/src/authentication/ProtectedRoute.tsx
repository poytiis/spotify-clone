import { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import { checkLogInAjax } from '../integration/httpClient';
import { useAppDispatch } from '../store/store';
import { setUser } from '../store/slices/userSlice';

const ProtectedRoute = () => {
  const { isAuthenticated, login, logout } = useAuth();
  const [loading, setLoading] = useState(true);
  const [isValid, setIsValid] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const validateSession = async () => {
      if(isAuthenticated) {
        setIsValid(true);
      } else {
        const response = await checkLogInAjax();
        if (response?.email) {
          login(response.email); 
          setIsValid(true);
          dispatch(setUser(response))
        } else {
          logout();
        }
      }

      setLoading(false); 
    };

    validateSession(); 
  }, [login, logout]);


  if (loading) {
    return <div>Ladataan...</div>;
  }

  return isValid ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
