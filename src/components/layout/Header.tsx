import { Link, useNavigate } from 'react-router';

import { Button } from '../ui/Button';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { logout } from '../../features/auth/auth.slice';

const Header = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const user = useAppSelector((state) => state.auth.user);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    // Optional safety: don’t render header if not logged in
    if (!user) return null;

    return (
        <header className="w-full bg-white border-b shadow-sm fixed top-0 left-0">
            <div className="max-w-6xl mx-auto px-4 md:px-4 lg:px-2 py-3 flex items-center justify-between">
                <h1 className="text-lg sm:text-xl font-bold text-primary">
                    DSA Sheet
                </h1>

                <div className="flex items-center gap-3 sm:gap-4">
                    {/* <span className="hidden sm:block text-sm text-gray-600">
                        {user.name}
                    </span> */}

                    <nav className="flex gap-4 items-center">
                        <Link to="/" className="text-sm">
                            Home
                        </Link>
                        <Link to="/progress" className="text-sm">
                            Progress
                        </Link>
                    </nav>

                    <Button variant="danger" className="text-xs sm:text-base" onClick={handleLogout}>
                        Logout
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;