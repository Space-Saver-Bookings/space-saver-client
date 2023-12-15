import {useContext} from 'react';
import {AuthContext} from './AuthContext';

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('AuthContext was used outside of AuthProvider');
  }

  return context;
};
