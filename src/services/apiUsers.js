import toast from 'react-hot-toast';
import api from './api';

export async function loginUser(login, logout, navigate, data) {
  try {
    const {
      data: {jwt},
    } = await api.post('/users/login', data);
    console.log('Login successful');
    await login(jwt);
    // console.log('default headers:', api.defaults.headers);
    navigate('/');
    toast.success('Logged in! Welcome to SpaceSaver.');
  } catch (err) {
    if (err.response) {
      console.error('Login error:', err.response || err);

      if (err.response.status === 500) {
        toast.error('An error occurred on the server. Please try again later.');
      } else if(err.response.status === 401) {
        toast.error('Session expired. Please log in again.');
        logout(); // Make sure this function clears all relevant auth state and storage
      }
       else {
        // toast.error('Failed to login: ' + err.response.data.message);
        toast.error('Failed to login, incorrect email or password.');
      }
    }
  }
}

export async function getUser(userId) {
  try {
    const {data} = await api.get(`/users/${userId}`);
    return data;
  } catch (err) {
    if (err.response) {
      console.error('Get user error:', err.response || err);
    }

    if (err.response.status === 500) {
      toast.error('An error occurred on the server. Please try again later.');
    } else {
      toast.error('Failed to fetch user: ' + err.response.data.message);
    }
  }
}
