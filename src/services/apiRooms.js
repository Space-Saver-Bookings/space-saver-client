import toast from "react-hot-toast";
import api from "./api";

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

export async function getSingleRoom(roomId) {
  try {
    const {
      data,
    } = await api.get(`/rooms/${roomId}`);
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
