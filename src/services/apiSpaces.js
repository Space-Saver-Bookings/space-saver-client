import toast from 'react-hot-toast';
import api from './api';

export async function getAllSpaces() {
  try {
    const {
      data: {spaces},
    } = await api.get(`/spaces`);
    console.log(spaces);
    return spaces;
  } catch (err) {
    if (err.response) {
      console.error('Get all spaces error:', err.response || err);
    }

    if (err.response.status === 500) {
      toast.error('An error occurred on the server. Please try again later.');
    } else {
      toast.error('Failed to fetch spaces: ', +err.response.data.message);
    }
  }
}

export async function getSingleSpace(spaceId) {
  try {
    const {data} = await api.get(`/spaces/${spaceId}`);
    // console.log(data);
    return data;
  } catch (err) {
    if (err.response) {
      console.error('Get space error:', err.response || err);
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
    console.log('New space: ', spaceData);
    toast.success('Space successfully created!');
  } catch (err) {
    if (err.response) {
      console.error('Create space error:', err.response || err);

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

export async function joinSpace(inviteCode) {
  try {
    const {
      data: {
        space: {name},
      },
    } = await api.post(`/spaces/code/${inviteCode}`);
    toast.success(`Succesfully joined ${name}`);
  } catch (err) {
    if (err.response) {
      console.error('Space code error:', err.response || err);

      if (err.response.status === 500) {
        toast.error('An error occurred on the server. Please try again later.');
      } else if (err.response.status === 401) {
        toast.error('Unauthorised.');
      } else {
        toast.error('Failed to join space: ' + err.response.data.message);
      }
    }
  }
}
