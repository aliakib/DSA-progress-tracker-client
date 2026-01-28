import { Outlet } from 'react-router';
import Header from '../components/layout/Header';

const ProtectedLayout = () => {
  return (
    <>
      <Header />
      <main className="w-full px-4 md:px-4 lg:px-6 pt-20 pb-4">
        <Outlet />
      </main>
    </>
  );
};

export default ProtectedLayout;