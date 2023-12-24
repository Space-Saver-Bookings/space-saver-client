import {useContext} from 'react';
import {AuthContext} from './AuthContext';

/**
 * Custom React hook that ensures components have access to the AuthContext.
 * 
 * @returns {Object} - The authentication context with user data and auth state.
 * @throws {Error} - Throws an error if the hook is used outside of an AuthProvider.
 */
const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('AuthContext was used outside of AuthProvider');
  }

  return context;
};

export default useAuth;
