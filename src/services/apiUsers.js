import toast from 'react-hot-toast';
import api from './api';

export async function loginUser(login, navigate, data) {
  try {
    const {
      data: {jwt},
    } = await api.post('/users/login', data);
    console.log('Login successful');
    login(jwt);
    // console.log('default headers:', api.defaults.headers);
    navigate('/');
    toast.success('Logged in! Welcome to SpaceSaver.');
  } catch (err) {
    if (err.response) {
      console.error('Login error:', err.response || err);

      if (err.response.status === 500) {
        toast.error('An error occurred on the server. Please try again later.');
      } else {
        // toast.error('Failed to login: ' + err.response.data.message);
        toast.error('Failed to login, incorrect email or password.');
      }
    }
  }
}
