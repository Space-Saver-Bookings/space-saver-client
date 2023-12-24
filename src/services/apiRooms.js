import toast from 'react-hot-toast';
import api from './api';

/**
 * Fetches all room data from the server asynchronously.
 * It makes an API call to retrieve all rooms and returns them.
 * If the request is successful, it returns an array of rooms. 
 * 
 * @returns {Promise<Array>} - A promise that resolves to an array of room objects when the request is successful.
 * @throws Will log the error and display a toast message if the API call fails.
 */
export async function getAllRooms() {
  try {
    const {
      data: {rooms},
    } = await api.get(`/rooms`);
    return rooms;
  } catch (err) {
    if (err.response) {
      console.error('Get all rooms error:', err.response || err);
    }

    if (err.response.status === 500) {
      toast.error('An error occurred on the server. Please try again later.');
    } else {
      toast.error('Failed to fetch rooms: ', +err.response.data.message);
    }
  }
}

/**
 * Fetches data of a single room from the server by room ID.
 * If the request is successful, it returns the room object.
 * 
 * @param {string} roomId - The ID of the room to fetch.
 * @returns {Promise<Object>} - A promise that resolves to a room object when the request is successful.
 * @throws Will log the error and display a toast message if the API call fails.
 */
export async function getSingleRoom(roomId) {
  try {
    const {data} = await api.get(`/rooms/${roomId}`);
    return data;
  } catch (err) {
    if (err.response) {
      console.error('Get all rooms error:', err.response || err);
    }

    if (err.response.status === 500) {
      toast.error('An error occurred on the server. Please try again later.');
    } else {
      toast.error('Failed to fetch rooms: ', +err.response.data.message);
    }
  }
}

/**
 * Creates a new room on the server with the provided room data.
 * It makes an API POST request to create a room and returns the newly created room data.
 * 
 * @param {Object} data - The data for the new room to be created.
 * @returns {Promise<Object>} - A promise that resolves to the newly created room object.
 * @throws Will log the error and display a toast message if the API call fails.
 */
export async function createRoom(data) {
  try {
    const {data: roomData} = await api.post(`/rooms`, data);
    toast.success('Room successfully created!');
    return roomData;
  } catch (err) {
    if (err.response) {
      console.error('Create room error:', err.response || err);

      if (err.response.status === 500) {
        toast.error('An error occurred on the server. Please try again later.');
      } else if (err.response.status === 401) {
        toast.error('Unauthorised.');
      } else {
        toast.error('Failed to create room: ' + err.response.data.message);
      }
    }
  }
}

/**
 * Updates an existing room's data on the server by room ID.
 * It makes an API PUT request to update the room and returns the updated room data.
 * 
 * @param {Object} data - The updated data for the room.
 * @param {string} roomId - The ID of the room to update.
 * @returns {Promise<Object>} - A promise that resolves to the updated room object.
 * @throws Will log the error and display a toast message if the API call fails.
 */
export async function updateRoom(data, roomId) {
  try {
    const {data: roomData} = await api.put(`/rooms/${roomId}`, data);
    toast.success('Room successfully updated!');
    return roomData;
  } catch (err) {
    if (err.response) {
      console.error('Create room error:', err.response || err);

      if (err.response.status === 500) {
        toast.error('An error occurred on the server. Please try again later.');
      } else if (err.response.status === 401) {
        toast.error('Unauthorised.');
      } else {
        toast.error('Failed to create room: ' + err.response.data.message);
      }
    }
  }
}

/**
 * Deletes a single room from the server by room ID.
 * It makes an API DELETE request to remove the room.
 * 
 * @param {string} roomId - The ID of the room to delete.
 * @returns {Promise<Object>} - A promise that resolves when the delete operation is successful.
 * @throws Will log the error and display a toast message if the API call fails.
 */
export async function deleteSingleRoom(roomId) {
  try {
    const {data: roomData} = await api.delete(`/rooms/${roomId}`);
    toast.success('Room successfully deleted!');
    return roomData;
  } catch (err) {
    if (err.response) {
      console.error('Delete room error:', err.response || err);

      if (err.response.status === 500) {
        toast.error('An error occurred on the server. Please try again later.');
      } else if (err.response.status === 401) {
        toast.error('Unauthorised.');
      } else {
        toast.error('Failed to delete room: ' + err.response.data.message);
      }
    }
  }
}
