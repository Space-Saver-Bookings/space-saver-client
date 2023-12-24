import {useEffect} from 'react';
import {setAuthToken} from '../services/api';

/**
 * A hook that retrieves the authentication token from localStorage and sets it for API use.
 */
const useAuthToken = () => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    // console.log('useAuthToken effect running with token:', token);
    setAuthToken(token);
  }, []);
};

export default useAuthToken;
