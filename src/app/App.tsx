import { BrowserRouter } from 'react-router';
import { useEffect } from 'react';

import AppRoutes from './routes';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { hydrateAuth } from '../features/auth/auth.thunks';
import AuthGate from './AuthGate';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(hydrateAuth());
  }, [dispatch]);

  return (
    <AuthGate>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthGate>
  );
};

export default App;