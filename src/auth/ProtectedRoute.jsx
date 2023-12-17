import PropTypes from 'prop-types';
import {Navigate, useLocation} from 'react-router-dom';
import useAuth from './useAuth';

function ProtectedRoute({children}) {
  const {isAuthenticated} = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{from: location}} replace />;
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

export default ProtectedRoute;
