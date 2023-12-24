import {useNavigate} from 'react-router-dom';

/**
 * A custom hook that provides a function to navigate back to the previous page in history.
 * 
 * @returns {Function} - A function that, when called, navigates the user back to the previous page.
 */
export function useMoveBack() {
  const navigate = useNavigate();
  return () => navigate(-1);
}
