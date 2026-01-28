import { Routes, Route, Navigate } from 'react-router';
import { lazy, Suspense } from 'react';

import ProtectedRoute from './ProtectedRoute';
import ProtectedLayout from './ProtectedLayout';
import RouteLoader from '../components/common/Loader';
import { ROUTES } from '../constants/routes';

// ✅ Lazy-loaded pages
const Login = lazy(() => import('../features/auth/Login'));
const TopicList = lazy(
  () => import('../features/topics/TopicList')
);
const ProgressOverview = lazy(
  () => import('../features/progress/ProgressOverview')
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<RouteLoader />}>
      <Routes>
        {/* Public */}
        <Route path={ROUTES.LOGIN} element={<Login />} />

        {/* Protected */}
        <Route element={<ProtectedRoute />}>
          <Route element={<ProtectedLayout />}>
            <Route
              path={ROUTES.HOME}
              element={<TopicList />}
            />
            <Route
              path={ROUTES.PROGRESS}
              element={<ProgressOverview />}
            />
          </Route>
        </Route>

        {/* Fallback */}
        <Route
          path="*"
          element={<Navigate to={ROUTES.HOME} replace />}
        />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
