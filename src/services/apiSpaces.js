import toast from 'react-hot-toast';
import api from './api';

/**
 * Fetches all space data from the server asynchronously.
 * It makes an API GET request to retrieve all spaces and returns them.
 * 
 * @returns {Promise<Array>} - A promise that resolves to an array of space objects when the request is successful.
 * @throws Will log the error and display a toast message if the API call fails.
 */
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

/**
 * Fetches data of a single space from the server by space ID.
 * If the request is successful, it returns the space object.
 * 
 * @param {string} spaceId - The ID of the space to fetch.
 * @returns {Promise<Object>} - A promise that resolves to a space object when the request is successful.
 * @throws Will log the error and display a toast message if the API call fails.
 */
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

/**
 * Creates a new space on the server with the provided space data.
 * It makes an API POST request to create a space and returns the newly created space data.
 * 
 * @param {Object} data - The data for the new space to be created.
 * @returns {Promise<Object>} - A promise that resolves to the newly created space object.
 * @throws Will log the error and display a toast message if the API call fails.
 */
export async function createSpace(data) {
  try {
    const {data: spaceData} = await api.post(`/spaces`, data);
    toast.success('Space successfully created!');
    return spaceData;
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

/**
 * Updates an existing space's data on the server by space ID.
 * It makes an API PUT request to update the space and returns the updated space data.
 * 
 * @param {Object} data - The updated data for the space.
 * @param {string} spaceId - The ID of the space to update.
 * @returns {Promise<Object>} - A promise that resolves to the updated space object.
 * @throws Will log the error and display a toast message if the API call fails.
 */
export async function updateSpace(data, spaceId) {
  try {
    const {data: spaceData} = await api.put(`/spaces/${spaceId}`, data);
    // console.log('Updated space: ', spaceData);
    toast.success('Space successfully updated!');
    return spaceData;
  } catch (err) {
    if (err.response) {
      console.error('Update space error:', err.response || err);

      if (err.response.status === 500) {
        toast.error('An error occurred on the server. Please try again later.');
      } else if (err.response.status === 401) {
        toast.error('Unauthorised.');
      } else {
        toast.error('Failed to update space: ' + err.response.data.message);
      }
    }
  }
}

/**
 * Joins a space using an invite code provided by the server.
 * It makes an API POST request to join the space and, on success, displays a success message with the space name.
 * 
 * @param {string} inviteCode - The invite code for joining a specific space.
 * @throws Will log the error and display a toast message if the API call fails.
 */
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

/**
 * Deletes a specific space from the server by space ID.
 * It makes an API DELETE request to remove the space.
 * 
 * @param {string} spaceId - The ID of the space to delete.
 * @throws Will log the error and display a toast message if the API call fails.
 */
export async function deleteSpace(spaceId) {
  try {
    await api.delete(`/spaces/${spaceId}`);
    // console.log(data);
    toast.success('Space successfully removed!');
  } catch (err) {
    if (err.response) {
      console.error('Delete space error:', err.response || err);

      if (err.response.status === 500) {
        toast.error('An error occurred on the server. Please try again later.');
      } else if (err.response.status === 401) {
        toast.error('Unauthorised.');
      } else {
        toast.error('Failed to update space: ' + err.response.data.message);
      }
    }
  }
}
