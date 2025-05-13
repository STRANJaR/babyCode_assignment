import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

const Navbar = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        return () => unsub();
    }, []);

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/");
    };


    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/30 border-b border-white/20 shadow-sm px-4 py-3">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="text-2xl font-bold text-blue-600">
                    <Link to="/">StudentDash</Link>
                </div>

                <div className="sm:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-800 hover:text-blue-600 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Desktop  */}
                <div className="hidden sm:flex items-center gap-6 text-gray-800">
                    {user ? (
                        <>
                            <Link to="/dashboard" className="hover:text-blue-600 font-medium transition">Dashboard</Link>
                            <Link to="/add-student" className="hover:text-blue-600 font-medium transition">Add Student</Link>
                            <button
                                onClick={handleLogout}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="hover:text-blue-600 font-medium transition">Login</Link>
                            <Link to="/sign-up" className="hover:text-blue-600 font-medium transition">Sign Up</Link>
                        </>
                    )}
                </div>
            </div>

            {/* Mobile dropdown menu */}
            {isOpen && (
                <div className="sm:hidden mt-2 space-y-2 px-4 text-gray-800 backdrop-blur-md bg-white/50 border border-white/20 rounded-lg shadow-md py-4">
                    {user ? (
                        <>
                            <Link to="/dashboard" className="block py-2 hover:text-blue-600">Dashboard</Link>
                            <Link to="/add-student" className="block py-2 hover:text-blue-600">Add Student</Link>
                            <button
                                onClick={handleLogout}
                                className="w-full text-left bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="block py-2 hover:text-blue-600">Login</Link>
                            <Link to="/sign-up" className="block py-2 hover:text-blue-600">Sign Up</Link>
                        </>
                    )}
                </div>
            )}
        </nav>
    )
}

export default Navbar