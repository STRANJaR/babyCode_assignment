import React from 'react'

const FeatureCard = ({ icon, title, desc }) => {
    return (
        <div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="text-4xl mb-4">{icon}</div>
                <h4 className="text-xl font-semibold mb-2">{title}</h4>
                <p className="text-gray-600">{desc}</p>
            </div>
        </div>
    )
}

export default FeatureCard