import toast from "react-hot-toast";

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
