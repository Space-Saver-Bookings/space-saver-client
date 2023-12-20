import toast from 'react-hot-toast';
import api from './api';

export async function getAllSpaces() {
  try {
    const {data} = await api.get(`/spaces`);
    console.log(data);
    return data;
  } catch (err) {
    if (err.response) {
      console.error('Update user error:', err.response || err);
    }

    if (err.response.status === 500) {
      toast.error('An error occurred on the server. Please try again later.');
    } else {
      toast.error('Failed to fetch spaces: ', +err.response.data.message);
    }
  }
}

export async function createSpace(data) {
  try {
    const {data: spaceData} = await api.post(`/spaces`, data);
    console.log(spaceData);
    toast.success("Space successfully created!")
  } catch (err) {
    if (err.response) {
      console.error('Space error:', err.response || err);

      if (err.response.status === 500) {
        toast.error('An error occurred on the server. Please try again later.');
      } else if (err.response.status === 401) {
        toast.error('Unauthorised.');
      } else {
        toast.error('Failed to create space: ' + err.response.data.message);
      }
    }
  }
}
