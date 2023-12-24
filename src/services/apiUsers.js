import toast from 'react-hot-toast';
import api from './api';

export async function loginUser(data) {
  try {
    const {
      data: {jwt},
    } = await api.post('/users/login', data);
    // console.log('default headers:', api.defaults.headers)
    return jwt;
  } catch (err) {
    if (err.response) {
      console.error('Login error:', err.response || err);

      if (err.response.status === 500) {
        toast.error('An error occurred on the server. Please try again later.');
      } else if (err.response.status === 401) {
        toast.error('Session expired. Please log in again.');
      } else {
        // toast.error('Failed to login: ' + err.response.data.message);
        toast.error('Failed to login, incorrect email or password.');
      }
    }
  }
}

export async function getUsers() {
  try {
    const {data: {users}} = await api.get(`/users`);
    return users;
  } catch (err) {
    if (err.response) {
      console.error('Get users error:', err.response || err);
    }

    if (err.response.status === 500) {
      toast.error('An error occurred on the server. Please try again later.');
    } else {
      toast.error('Failed to fetch user: ' + err.response.data.message);
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

export async function updateUser(userId, data) {
  try {
    const {data: userData} = await api.put(`/users/${userId}`, data);
    console.log('Updated user data: ', userData);
    return userData;
  } catch (err) {
    if (err.response) {
      console.error('Update user error:', err.response || err);
    }

    if (err.response.status === 500) {
      toast.error('An error occurred on the server. Please try again later.');
    } else {
      toast.error(
        'Failed to update user settings: ',
        +err.response.data.message
      );
    }
  }
}
