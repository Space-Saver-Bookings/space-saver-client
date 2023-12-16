import {useEffect} from 'react';
import useAuth from '../auth/useAuth';
import {setAuthToken} from '../services/api';

const useAuthToken = () => {
  const {token} = useAuth();

  useEffect(() => {
    setAuthToken(token);
  }, [token]);
};

export default useAuthToken;
