import React from 'react'
import { useEffect, useState } from "react";
import { fetchStudents } from "../mockAPI.js";
import { Link } from 'react-router-dom';
import StudentCard from '../components/StudentCard.jsx';



const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchStudents().then(setStudents);
  }, []);

  const filteredStudents =
    filter === "All"
      ? students
      : students.filter((s) => s.course === filter);

  const uniqueCourses = ["All", ...new Set(students.map((s) => s.course))];



  return (
    <section>
      <div className="p-6 max-w-7xl mx-auto">

        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Student Dashboard</h1>
          <Link
            to="/add-student"
            className="mt-4 sm:mt-0 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            + Add Student
          </Link>
        </div>

        
        <div className="mb-6 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <label className="font-medium text-gray-700">Filter by Course:</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {uniqueCourses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>


        {students.length === 0 ? (
          <p className="text-gray-500">Loading students...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredStudents.map((student) => (
              <Link key={student.id} to={`/student/${student.id}`} className="">
                <StudentCard
                  key={student.id}
                  name={student.name}
                  email={student.email}
                  course={student.course}
                />
              </Link>
            ))}
          </div>

        )}
      </div>
    </section>
  )
}

export default Dashboard