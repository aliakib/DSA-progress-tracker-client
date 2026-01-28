import type { ReactNode } from 'react';
import { useAppSelector } from '../hooks/useAppSelector';
import Loader from '../components/common/Loader';

interface Props {
    children: ReactNode;
}

const AuthGate = ({ children }: Props) => {
    const { initialized } = useAppSelector((state) => state.auth);

    if (!initialized) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader />
            </div>
        );
    }

    return <>{children}</>;
};

export default AuthGate;
