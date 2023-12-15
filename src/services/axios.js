import axios from 'axios';

const api = axios.create({
  baseURL: 'https://space-saver-server-ab36c9d46e81.herokuapp.com',
});

export default api;
