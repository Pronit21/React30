import { useState } from 'react';

function Eleven() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [users, setUsers] = useState([]);

    const handleAuthentication = () => {
        if (isRegistered) {
            // Login
            const user = users.find((u) => u.email === email && u.password === password);
            if (user) {
                setIsLoggedIn(true);
            } else {
                alert('Login failed. Please check your credentials');
            }
        } else {
            // Register
            const newUser = { email, password };
            setUsers([...users, newUser]);
            localStorage.setItem('users', JSON.stringify([...users, newUser]));
            setIsLoggedIn(true);
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setEmail('');
        setPassword('');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                {isLoggedIn ? (
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900">Welcome, {email}!</h2>
                        <button onClick={handleLogout} className="mt-4 inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                            Logout
                        </button>
                    </div>
                ) : (
                    <div>
                        <h2 className="text-center text-3xl font-extrabold text-gray-900">
                            {isRegistered ? 'Login' : 'Register'}
                        </h2>
                        <form className="mt-8 space-y-6" onSubmit={handleAuthentication}>
                            <input
                                type="email"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-4"
                            />
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                {isRegistered ? 'Login' : 'Register'}
                            </button>
                        </form>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            {isRegistered
                                ? "Don't have an account? Register now"
                                : 'Already have an account? Log in!'}
                        </p>
                        <button
                            onClick={() => setIsRegistered(!isRegistered)}
                            className="mt-2 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            {isRegistered ? 'Register' : 'Login'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Eleven;
