import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import PasswordInput from '../components/PasswordInput';


const Login = () => {
    return (
        <>
            <Navbar />

            <div className="flex items-center justify-center mt-28 text-white">
                <div className="w-96 border rounded bg-zinc-700  px-10 py-8 shadow-emerald-50">
                    <form onSubmit={() => {}}>
                        <h4 className="text-2xl mb-7 text-center font-semibold">Login</h4>
                        
                        <input
                            type="text"
                            placeholder="Email"
                            className="input-box mb-4 w-full px-4 py-2 border rounded"
                        />
                        
                        <PasswordInput />


                        <button
                            type="submit"
                            className="btn-primary w-full bg-zinc-950 text-white py-2 rounded hover:bg-blue-700 transition"
                        >
                            Login
                        </button>

                        <p className="text-sm text-center mt-4">
                            Not registered yet?{" "}
                            <Link
                                to="/signup"
                                className="font-medium text-amber-200 underline"
                            >
                                Create an Account
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
