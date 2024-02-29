
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ canActivate, redirectPath }) => {
  if (!canActivate) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

ProtectedRoute.propTypes = {
  canActivate: PropTypes.bool.isRequired,
  redirectPath: PropTypes.string.isRequired
};

export default ProtectedRoute;
