// import {jwtDecode} from 'jwt-decode';
import PropTypes from 'prop-types';
import {createContext, useEffect, useState} from 'react';

export const AuthContext = createContext();

export function AuthProvider({children}) {
  const [isLoading, setIsLoading] = useState(true);

  const [auth, setAuth] = useState({
    isAuthenticated: false,
    token: null,
    // user: null,
  });

  useEffect(() => {
    const checkToken = async () => {
      // TODO: remove in production?
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        setAuth({isAuthenticated: true, token: storedToken});
      }
      setIsLoading(false);
    };

    checkToken();
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    setAuth({isAuthenticated: true, token});
    setIsLoading(false);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuth({isAuthenticated: false, token: null});
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider value={{...auth, isLoading, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};
