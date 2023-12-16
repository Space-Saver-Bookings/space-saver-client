// import {jwtDecode} from 'jwt-decode';
import PropTypes from 'prop-types';
import {createContext, useEffect, useState} from 'react';

export const AuthContext = createContext();

export function AuthProvider({children}) {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    token: null,
    // user: null,
  });

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setAuth({isAuthenticated: true, token: storedToken});
    }
  }, []);

  const login = (token) => {
    // TODO: userId or user details required in jwt token or add userId in response along with jwt
    // const decodedToken = jwtDecode(token);
    // console.log(decodedToken);
    localStorage.setItem('token', token);
    setAuth({isAuthenticated: true, token});
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuth({isAuthenticated: false, token: null});
  };

  return (
    <AuthContext.Provider value={{...auth, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};
