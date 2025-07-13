import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import PasswordInput from '../components/PasswordInput';
import { validateEmail } from '../utils/helper'; // Make sure the path is correct

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if(!password) {
            setError("Please enter a valid password.");
            return;
        }
        setError("")

        //login api call
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-zinc-800 text-white">
            <Navbar />

            <div className="flex items-center justify-center pt-28">
                <div className="w-96 border border-zinc-700 rounded bg-zinc-800 px-10 py-8
                                shadow-xl shadow-emerald-500/30 hover:shadow-emerald-400/50
                                transition duration-500">
                    <form onSubmit={handleLogin}>
                        <h4 className="text-2xl mb-7 text-center font-semibold">Login</h4>

                        <input
                            type="text"
                            placeholder="Email"
                            className="mb-4 w-full px-4 py-2 bg-zinc-900 border border-zinc-600 rounded text-white focus:outline-0"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <PasswordInput
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {error && (
                            <p className="text-red-500 text-xs pb-1">{error}</p>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-zinc-950 text-white py-2 rounded hover:bg-emerald-700 transition cursor-pointer"
                        >
                            Login
                        </button>

                        <p className="text-sm text-center mt-4">
                            Not registered yet?{" "}
                            <Link
                                to="/signup"
                                className="font-medium text-amber-300 underline"
                            >
                                Create an Account
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
