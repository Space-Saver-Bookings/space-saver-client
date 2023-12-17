import {useEffect} from 'react';
import {setAuthToken} from '../services/api';

const useAuthToken = () => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    // console.log('useAuthToken effect running with token:', token);
    setAuthToken(token);
  }, []);
};

export default useAuthToken;
