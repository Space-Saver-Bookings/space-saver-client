import PropTypes from 'prop-types';
import {createContext, useState} from 'react';

export const AuthContext = createContext();

export function AuthProvider({children}) {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    token: null,
    user: null,
  });

  const login = (token, user) => {
    setAuth({isAuthenticated: true, token, user});
  };

  const logout = () => {
    setAuth({isAuthenticated: false, token: null, user: null});
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
