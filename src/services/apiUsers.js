import toast from 'react-hot-toast';
import api from './api';

/**
 * Attempts to log in a user using the provided credentials.
 * It makes an API POST request to the login endpoint and, on success, returns the JWT token.
 * 
 * @param {Object} data - The login credentials, typically including email and password.
 * @returns {Promise<string>} - A promise that resolves to the JWT token when login is successful.
 * @throws Will log the error and display a toast message if the API call fails.
 */
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

export const registerUser = async (data) => {
  try {
    await api.post('/users/register', data);
    toast.success('Register successful!');
  } catch (err) {
    if (err.response) {
      console.error('Register error:', err);

      if (err.response.status === 500) {
        toast.error('An error occurred on the server. Please try again later.');
      } else if (err.response.status === 409) {
        toast.error('The email address you entered is already registered.');
      } else {
        toast.error('Failed to register: ' + err.response.data.message);
      }
    }
  }
};

/**
 * Fetches all user data from the server.
 * It makes an API GET request to retrieve all users and returns them.
 * 
 * @returns {Promise<Array>} - A promise that resolves to an array of user objects when the request is successful.
 * @throws Will log the error and display a toast message if the API call fails.
 */
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

/**
 * Fetches data of a single user from the server by user ID.
 * If the request is successful, it returns the user object.
 * 
 * @param {string} userId - The ID of the user to fetch.
 * @returns {Promise<Object>} - A promise that resolves to a user object when the request is successful.
 * @throws Will log the error and display a toast message if the API call fails.
 */
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

/**
 * Updates an existing user's data on the server by user ID.
 * It makes an API PUT request to update the user and returns the updated user data.
 * 
 * @param {string} userId - The ID of the user to update.
 * @param {Object} data - The updated data for the user.
 * @returns {Promise<Object>} - A promise that resolves to the updated user object.
 * @throws Will log the error and display a toast message if the API call fails.
 */
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
