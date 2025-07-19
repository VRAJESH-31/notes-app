import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";

const Landing = () => {
const navigate = useNavigate(); 
    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-emerald-900 p-4 md:p-8 text-white font-[Open Sans]">
            <div className="max-w-7xl mx-auto">
                {/* Navbar */}
                <nav className="flex justify-between items-center py-6 mb-16">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
                            <span className="material-symbols-outlined text-white">note</span>
                        </div>
                        <h1 className="text-2xl font-bold text-white">NoteFlow</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button onClick={() => navigate("/login")} className="px-6 py-2 text-emerald-400 hover:text-emerald-300 transition-colors duration-300 font-medium">
                            Login
                        </button>
                        <button onClick={() => navigate("/signup")} className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
                            Sign Up
                        </button>
                    </div>
                </nav>

                {/* Hero Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                                Your thoughts, <span className="text-emerald-400"> organized</span>
                            </h2>
                            <p className="text-xl text-zinc-300 leading-relaxed">
                                Capture, organize, and access your notes from anywhere. The intelligent note-taking app that adapts to your workflow.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button onClick={() => navigate("/signup")} className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25 font-semibold text-lg">
                                Get Started Free
                            </button>
                        </div>
                        
                    </div>

                    {/* Right Section Note Card UI */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-zinc-800/20 rounded-3xl blur-3xl"></div>
                        <div className="relative bg-zinc-800/50 backdrop-blur-sm rounded-3xl p-8 border border-zinc-700">
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    </div>
                                    <div className="text-zinc-400 text-sm">My Notes</div>
                                </div>
                                <div className="space-y-4">
                                    {["Project Ideas", "Meeting Notes", "Recipe Collection"].map((title, idx) => (
                                        <div key={idx} className="bg-zinc-700/50 rounded-xl p-4 hover:bg-zinc-700/70 transition-colors duration-300 cursor-pointer">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="text-white font-medium">{title}</h3>
                                                <span className="text-emerald-400 text-sm">
                                                    {idx === 0 ? "Today" : idx === 1 ? "Yesterday" : "2 days ago"}
                                                </span>
                                            </div>
                                            <p className="text-zinc-300 text-sm">
                                                {idx === 0 && "Building a note-taking app with advanced features..."}
                                                {idx === 1 && "Discussed new features and user feedback..."}
                                                {idx === 2 && "Favorite recipes and cooking tips..."}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center justify-center pt-4">
                                    <button className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors duration-300">
                                        <AiOutlinePlus className="text-xl" />
                                        <span>Add New Note</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature Section */}
                <div className="mt-24 grid md:grid-cols-3 gap-8">
                    {[{ icon: "sync", title: "Real-time Sync", desc: "Access your notes from any device, anywhere. Changes sync instantly across all platforms." },
                        { icon: "search", title: "Smart Search", desc: "Find any note instantly with our powerful search that understands context and content." },
                        { icon: "security", title: "Secure & Private", desc: "Your notes are encrypted and secure. We never read your content or sell your data." }]
                    .map((feature, i) => (
                        <div key={i} className="bg-zinc-800/30 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700 hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-105">
                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-white">{feature.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                            <p className="text-zinc-300">{feature.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Final CTA */}
                <div className="mt-24 text-center">
                    <div className="bg-gradient-to-r from-emerald-500/10 to-zinc-800/10 rounded-3xl p-12 border border-emerald-500/20">
                        <h3 className="text-4xl font-bold text-white mb-6">Ready to get organized?</h3>
                        <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
                            Join thousands of users who have transformed their note-taking experience with NoteFlow.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button onClick={() => navigate("/signup")} className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25 font-semibold text-lg">
                                Sign Up Now
                            </button>
                            <button onClick={() => navigate("/login")} className="px-8 py-4 text-emerald-400 hover:text-emerald-300 transition-colors duration-300 font-semibold text-lg">
                                Already have an account? Login
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="mt-24 text-center border-t border-zinc-700 pt-12">
                    <h4 className="text-lg font-semibold text-emerald-400">Created by Vrajesh Pandya</h4>
                    <p className="text-zinc-400 mt-2 max-w-xl mx-auto">
                        Passionate full-stack developer exploring the MERN stack and AI integrations. Building intuitive apps that solve real-world problems.
                    </p>
                    <div className="flex justify-center gap-6 mt-4 text-2xl">
                        <a href="https://github.com/VRAJESH-31" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-white">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/vrajesh-n-pandya-a8ba25266/" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-white">
                            <FaLinkedin />
                        </a>
                    </div>
                    <p className="text-zinc-500 text-sm mt-4">© {new Date().getFullYear()} NoteFlow. All rights reserved.</p>
                </footer>
            </div>

            {/* Fonts and Material Symbols */}
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
        </div>
    );
};

export default Landing;
