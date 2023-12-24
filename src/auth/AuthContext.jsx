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

  /**
   * Checks if a JWT token is expired.
   * It decodes the token using jwtDecode to access its expiration time and compares it with the current time.
   * If the token is expired or an error occurs in decoding, it returns true indicating the token is invalid.
   * Otherwise, it returns false, indicating the token is still valid.
   *
   * @param {string} token - The JWT token to be checked.
   * @returns {boolean} - Returns true if the token is expired, false otherwise.
   */
  const isTokenExpired = (token) => {
    const now = Date.now() / 1000;
    try {
      const decodedToken = jwtDecode(token);
      return decodedToken.exp < now;
    } catch (err) {
      return false;
    }
  };

  /**
   * UseEffect is used so that it checks for a stored authentication token in localStorage on component mount.
   * If a valid token exists, it fetches the user's details and sets authentication state accordingly.
   * If the token is invalid or expired, it performs a logout to clear any stored credentials and reset state.
   */
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

  /**
   * Logs out the user.
   * This function clears the stored authentication token from localStorage, resets the authToken for API calls,
   * and updates the authentication state to reflect that the user is no longer authenticated.
   */
  const logout = () => {
    localStorage.removeItem('token');
    setAuthToken(null);
    setAuth({isAuthenticated: false, token: null, user: null});
    setIsLoading(false);
  };

  /**
   * Logs in the user with a given JWT token.
   * This function checks if the provided token is expired using isTokenExpired.
   * If valid, it decodes the token to fetch the user's ID, retrieves user details, and updates the authentication state.
   * It also sets the token for future API calls and stores it in localStorage.
   * If the token is invalid or expired, it invokes logout to reset the user's state.
   *
   * @param {string} token - The JWT token for user authentication.
   */
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
