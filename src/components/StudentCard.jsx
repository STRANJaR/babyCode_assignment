import React from 'react'

const StudentCard = ({ name, email, course }) => {
    return (
        <div>
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-[1.02] border border-gray-100">
                <div className="flex items-center p-5 space-x-4">
                    <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                            {name.charAt(0)}
                        </div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <h2 className="text-lg font-semibold text-gray-800 truncate">{name}</h2>
                        <p className="text-sm text-gray-500 truncate">{email}</p>
                        <p className="mt-1 text-sm text-gray-400">{course}</p>
                    </div>
                    <div className="text-right">
                        <span className="inline-block bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
                            Enrolled
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentCard