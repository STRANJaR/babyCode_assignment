import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStudentById } from "../mockAPI.js";

const StudentDetails = () => {
    const { id } = useParams();
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getStudentById(id).then((res) => {
            setStudent(res);
            setLoading(false);
        });
    }, [id]);

    if (loading) return <p className="text-center mt-10">Loading student details...</p>;
    if (!student) return <p className="text-center mt-10">Student not found.</p>;

    return (
        <div className="max-w-3xl mx-auto mt-12 bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
            <div className="flex items-center space-x-6">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-3xl font-bold text-blue-600">
                    {student.name.charAt(0)}
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">{student.name}</h1>
                    <p className="text-gray-500">{student.email}</p>
                    <span className="mt-2 inline-block text-sm bg-green-50 text-green-700 px-3 py-1 rounded-full">
                        Enrolled
                    </span>
                </div>
            </div>

            <div className="mt-8 border-t pt-6 space-y-4 text-gray-700">
                <div className="flex">
                    <span className="w-32 font-medium">Full Name:</span>
                    <span>{student.name}</span>
                </div>
                <div className="flex">
                    <span className="w-32 font-medium">Email:</span>
                    <span>{student.email}</span>
                </div>
                <div className="flex">
                    <span className="w-32 font-medium">Course:</span>
                    <span>{student.course}</span>
                </div>
            </div>
        </div>

    );
};

export default StudentDetails;
