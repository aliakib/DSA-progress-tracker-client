import { useState } from 'react';
import { useNavigate } from 'react-router';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { login } from './auth.thunks';
import Spinner from '../../components/ui/Spinner';

const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { loading, error } = useAppSelector((state) => state.auth);
    const user = useAppSelector((state) => state.auth.user);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const result = await dispatch(
            login({ email, password })
        );

        // ✅ Redirect only on success
        if (login.fulfilled.match(result)) {
            navigate('/');
        }
    };

    if (user) {
        navigate('/');
        return null;
    }

    return (
        <div className="w-full h-full">
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="w-full max-w-sm sm:max-w-xs mx-4 sm:mx-0 bg-white rounded-lg shadow p-6">
                    <h1 className="text-2xl font-bold text-center mb-6">
                        Login
                    </h1>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-primary/30"
                                placeholder="you@example.com"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-primary/30"
                                placeholder="••••••••"
                            />
                        </div>

                        {/* Error */}
                        {error && (
                            <p className="text-sm text-red-600">
                                {error}
                            </p>
                        )}

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-2 bg-primary text-white rounded font-medium hover:bg-primary/90 disabled:opacity-60"
                        >
                            {loading ? <Spinner /> : 'Login'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
