import React, { useEffect } from 'react'
import { useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) navigate('/dashboard')

        });
        return unsubscribe();
    }, [])

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/dashboard");
        } catch (err) {
            console.error(err);
            setError("Signup failed. Try a stronger password or use a different email.");
        }
    };


    return (
        <div>
            <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
                <form
                    onSubmit={handleSignup}
                    className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm space-y-4"
                >
                    <h2 className="text-xl font-bold">Sign Up</h2>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 border rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password (min 6 chars)"
                        className="w-full p-2 border rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
                    >
                        Sign Up
                    </button>
                    <p className="text-sm mt-2">
                        Already have an account?{" "}
                        <a href="/login" className="text-blue-600 hover:underline">Log in</a>
                    </p>
                </form>
            </div>

        </div>
    )
}

export default SignUp