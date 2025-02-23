import React, { useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://localhost:5001/login', { email, password });

            if (response.status === 200) {
                console.log("Logged In")
                navigate('/home'); // Redirect on success
                console.log("Logged In")
            }
        } catch (err) {
            setError('Login failed. Please check your email and password.');
            console.error(err);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
                <h2 className="text-center text-2xl font-bold mb-6">Login</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6 relative">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span
                            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                            style={{ top: '70%', transform: 'translateY(-50%)' }}
                        >
                            <i className={`fas ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
                        </span>
                    </div>
                    <button
                        type="submit"
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
                    >
                        Login
                    </button>
                    <p className="mt-4 text-center">
                        Don't have an account?{' '}
                        <a href="/signup" className="text-green-600 hover:underline">
                            Create one
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
