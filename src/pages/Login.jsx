import React, { useEffect } from 'react'
import { useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate('/dashboard')
            }
        });
        return unsubscribe();
    }, [])

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/dashboard");
        } catch (err) {
            console.error(err);
            setError("Invalid email or password");
        }

    };

    

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);

            const user = result.user;
            console.log("Signed in as:", user.displayName);
        } catch (error) {
            console.error("Google sign-in error:", error);
        }
    };

    return (
        <div>
            <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
                <form
                    onSubmit={handleLogin}
                    className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm space-y-4"
                >
                    <h2 className="text-xl font-bold">Login</h2>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button
                        onClick={signInWithGoogle}
                        className="border border-gray-500 w-full hover:bg-blue-100 px-4 py-2 rounded  mt-4"
                    >
                        Sign in with Google (beta)
                    </button>
                    <hr />
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
                        placeholder="Password"
                        className="w-full p-2 border rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    >
                        Login
                    </button>
                    <p className="text-sm mt-2">
                        Don’t have an account?{" "}
                        <a href="/sign-up" className="text-blue-600 hover:underline">Sign up</a>
                    </p>

                </form>

            </div>

        </div>
    )
}

export default Login