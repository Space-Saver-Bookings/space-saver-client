import toast from "react-hot-toast";

/**
 * Logs out the current user and navigates to the login page.
 * This function calls the passed logout function to clear user session and then navigates to the login page.
 * 
 * @param {Function} logout - The function to clear user session and state.
 * @param {Function} navigate - The navigation function from React Router to redirect the user to a specified route.
 */
export function logoutUser(logout, navigate) {
  try {
    logout();
    navigate('/login');
    toast.success('Logged out! Thanks for visiting.');
  } catch (err) {
    if (err.response) {
      console.error('Logout error:', err.response || err);

      if (err.response.status === 500) {
        toast.error('An error occurred on the server. Please try again later.');
      } else {
        // toast.error('Failed to login: ' + err.response.data.message);
        toast.error('Failed to logout: ', err.response.data.message);
      }
    }
  }
}
