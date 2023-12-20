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

  useEffect(() => {
    const checkToken = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        try {
          // Decode the stored token to extract the user ID
          const decodedToken = jwtDecode(storedToken);
          if (decodedToken && decodedToken.userId) {
            const userId = decodedToken.userId;
            const userDetails = await getUser(userId);

            // Set both the token and the user ID in the auth state
            setAuth({
              isAuthenticated: true,
              token: storedToken,
              user: userDetails,
            });
          }
        } catch (error) {
          console.error('Error decoding token:', error);
          // Handle invalid token, e.g. by logging out the user
          logout(); // This function should clear the auth state and localStorage
        }
      }
      setIsLoading(false);
    };

    checkToken();
  }, []);

  // TODO: after user logs in, load page stops had to refresh
  const login = async (token) => {
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
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuthToken(null);
    setAuth({isAuthenticated: false, token: null, user: null});
    setIsLoading(false);
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
