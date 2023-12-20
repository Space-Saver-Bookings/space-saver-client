import toast from 'react-hot-toast';
import api from './api';

export async function getBookings() {
  try {
    const response = await api.get('/bookings');
    return response.data.bookings;
  } catch (error) {
    handleApiError(error, 'Error fetching bookings');
  }
}

export function handleLoginError(err) {
  if (err.response) {
    console.error('Login error:', err.response || err);

    if (err.response.status === 500) {
      toast.error('An error occurred on the server. Please try again later.');
    } else {
      toast.error('Failed to login, incorrect email or password.');
    }
  }
}

export function handleGetUserError(err) {
  if (err.response) {
    console.error('Get user error:', err.response || err);
  }

  if (err.response.status === 500) {
    toast.error('An error occurred on the server. Please try again later.');
  } else {
    toast.error('Failed to fetch user: ' + err.response.data.message);
  }
}

export function handleApiError(err, customMessage = 'An error occurred') {
  if (err.response) {
    console.error(customMessage + ':', err.response || err);
    toast.error(customMessage + '. Please try again later.');
  }
}
