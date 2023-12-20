// import {jwtDecode} from 'jwt-decode';
import {jwtDecode} from 'jwt-decode';
import PropTypes from 'prop-types';
import {createContext, useEffect, useState} from 'react';
import {getUser} from '../services/apiUsers';
import {setAuthToken} from '../services/api';

export const AuthContext = createContext();

export function AuthProvider({children}) {
  const [isLoading, setIsLoading] = useState(true);

  const [auth, setAuth] = useState({
    isAuthenticated: false,
    token: null,
    user: null,
  });

  const isTokenExpired = (token) => {
    const now = Date.now() / 1000;
    try {
      const decodedToken = jwtDecode(token);
      return decodedToken.exp < now;
    } catch (err) {
      return false;
    }
  };

  useEffect(() => {
    const checkToken = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const storedToken = localStorage.getItem('token');
      if (storedToken && !isTokenExpired(storedToken)) {
        try {
          const decodedToken = jwtDecode(storedToken);
          if (decodedToken && decodedToken.userId) {
            const userId = decodedToken.userId;
            const userDetails = await getUser(userId);

            setAuth({
              isAuthenticated: true,
              token: storedToken,
              user: userDetails,
            });
          }
        } catch (error) {
          console.error('Error decoding token:', error);
          logout();
        } finally {
          setIsLoading(false);
        }
      } else {
        logout();
      }
    };

    checkToken();
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    setAuthToken(null);
    setAuth({isAuthenticated: false, token: null, user: null});
    setIsLoading(false);
  };

  const login = async (token) => {
    if (isTokenExpired(token)) {
      logout();
    } else {
      const decodedToken = jwtDecode(token);
      try {
        const userId = decodedToken.userId;
        setAuthToken(token);
        const userDetails = await getUser(userId);
        console.log(userDetails);

        localStorage.setItem('token', token);
        setAuth({isAuthenticated: true, token, user: userDetails});
      } catch (err) {
        console.error('Error decoding token: ', err);
        logout();
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <AuthContext.Provider value={{...auth, isLoading, login, logout, setAuth}}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};
