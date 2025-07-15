import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import PasswordInput from '../components/PasswordInput';
import { validateEmail } from '../utils/helper';
import axiosInstance from '../utils/axiosInstance';

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        if (!name.trim()) {
            setError("Please enter your name.");
            return;
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if (!password) {
            setError("Enter a strong password.");
            return;
        }

        setError("");

        // signup API here
        try{
            const response = await axiosInstance.post("/create-account",{
                fullName: name,
                email: email,
                password: password,
            });
            //signup response
            if(response.data && response.data.error){
                setError(response.data.message)
                return
            }
            if(response.data && response.data.accessToken){
                localStorage.setItem("token", response.data.accessToken)
                navigate("/dashboard");
            }
        }catch(error){
            //handling login error
            if(error.response && error.response.data && error.response.data.message){
                setError(error.response.data.message);
            }else{
                setError("An unexpected error occured");
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-zinc-800 text-white">
            <Navbar />

            <div className="flex items-center justify-center pt-28">
                <div className="w-96 border border-zinc-700 rounded bg-zinc-800 px-10 py-8
                                shadow-xl shadow-emerald-500/30 hover:shadow-emerald-400/50
                                transition duration-500">
                    <form onSubmit={handleSignup}>
                        <h4 className="text-2xl mb-7 text-center font-semibold">Create Account</h4>

                        <input
                            type="text"
                            placeholder="Full Name"
                            className="mb-4 w-full px-4 py-2 bg-zinc-900 border border-zinc-600 rounded text-white focus:outline-0"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

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
                            className="w-full bg-zinc-950 text-white py-2 rounded hover:bg-emerald-700 transition"
                        >
                            Sign Up
                        </button>

                        <p className="text-sm text-center mt-4">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="font-medium text-amber-300 underline"
                            >
                                Login here
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
