import axios from 'axios';

const api = axios.create({
  baseURL: 'https://space-saver-server-ab36c9d46e81.herokuapp.com',
});

export function setAuthToken(token) {
  // console.log('setAuthToken called with token:', token);
  if (token) {
    api.defaults.headers.common['jwt'] = token;
  } else {
    delete api.defaults.headers.common['jwt'];
  }
}

export default api;
