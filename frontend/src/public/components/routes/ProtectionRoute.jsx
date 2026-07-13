import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../../api/authContext';

const ProtectedRoute = () => {
  const { token } = useAuth();

  // If there is no token, redirect to login page
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the child routes
  return <Outlet />;
};

export default ProtectedRoute;