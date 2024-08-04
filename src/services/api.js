import axios from 'axios';

const api = axios.create({
  baseURL: 'https://spacesaver-server.vercel.app/',
});

/**
 * Sets or clears the authentication token for API calls.
 * This function modifies the default headers for the API client by setting the JWT token
 * for authenticated requests or deleting it if no token is provided.
 * 
 * @param {string|null} token - The JWT token to authenticate API requests. Pass null to clear the token.
 */
export function setAuthToken(token) {
  // console.log('setAuthToken called with token:', token);
  if (token) {
    api.defaults.headers.common['jwt'] = token;
  } else {
    delete api.defaults.headers.common['jwt'];
  }
}

export default api;
