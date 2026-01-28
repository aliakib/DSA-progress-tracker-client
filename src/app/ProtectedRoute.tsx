import { Navigate, Outlet } from 'react-router';
import { useAppSelector } from '../hooks/useAppSelector';

const ProtectedRoute = () => {
  const user = useAppSelector((state) => state.auth.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
