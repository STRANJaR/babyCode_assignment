import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { addStudent } from "../mockAPI.js";



const AddStudent = () => {
    const [student, setStudent] = useState({
        name: "",
        email: "",
        course: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsLoggedIn(!!user);
            if (!user) navigate("/");
        });
        return () => unsubscribe();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true)
        const { name, email, course } = student;

        if (!name || !email || !course) {
            return setError("All fields are required.");
        }

        if (!email.includes("@")) {
            return setError("Invalid email.");
        }

        try {
            await addStudent(student);
            setSuccess("Student added successfully!");
            setStudent({ name: "", email: "", course: "" });
        } catch (err) {
            console.log(err)
            setError("Failed to add student.");
        }
        setLoading(false)
    };

    if (isLoggedIn === null) return <p>Checking auth...</p>;

    return (
        <section className='py-10 bg-gray-100 h-full'>
            <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Add Student</h2>


                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                {success && <p className="text-green-500 text-center mb-4">{success}</p>}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input
                            type="text"
                            placeholder="Name"
                            value={student.name}
                            onChange={(e) => setStudent({ ...student, name: e.target.value })}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            value={student.email}
                            onChange={(e) => setStudent({ ...student, email: e.target.value })}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="Course"
                            value={student.course}
                            onChange={(e) => setStudent({ ...student, course: e.target.value })}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        >
                            {loading ? "Adding..." : "Add Student"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default AddStudent