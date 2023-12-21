import toast from 'react-hot-toast';
import api from './api';


export async function getBookings(myBookingFilter=null) {
  try {
    if (myBookingFilter) {
    const response = await api.get(
      `/bookings/?primary_user=true&invited_user=true`
    );
    return response.data.bookings;
    }
    const response = await api.get('/bookings');
    return response.data.bookings;
  } catch (error) {
    handleApiError(error, 'Error fetching bookings');
  }
}


export function handleApiError(err, customMessage = 'An error occurred') {
  if (err.response) {
    console.error(customMessage + ':', err.response || err);
    toast.error(customMessage + '. Please try again later.');
  }
}

