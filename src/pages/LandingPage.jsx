import React from 'react'
import FeatureCard from '../components/FeatureCard'
import Footer from '../components/Footer'

const LandingPage = () => {
    return (
        <div>
            <div className="min-h-screen bg-gray-50 text-gray-800">

                <section className="text-center px-6 py-20 bg-white">
                    <h2 className="text-4xl font-extrabold mb-4 leading-tight">
                        Manage Your Students with Ease
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto mb-8">
                        A modern student dashboard to help track enrollments, courses, and student info — built for schools, educators, and developers.
                    </p>
                    <a
                        href="/dashboard"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
                    >
                        Get Started
                    </a>
                </section>

                
                <section id="features" className="px-6 py-20 bg-gray-50">
                    <div className="max-w-6xl mx-auto">
                        <h3 className="text-3xl font-bold text-center mb-12">Key Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <FeatureCard
                                title="Student Profiles"
                                desc="View, manage, and search student records easily in a beautiful dashboard."
                                icon="👩‍🎓"
                            />
                            <FeatureCard
                                title="Course Management"
                                desc="Assign and track courses with a flexible structure."
                                icon="📚"
                            />
                            <FeatureCard
                                title="Firebase Auth"
                                desc="Secure login and signup using Google and email authentication."
                                icon="🔒"
                            />
                        </div>
                    </div>
                </section>


                <section id="about" className="bg-white py-20 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-3xl font-bold mb-6">About the Project</h3>
                        <p className="text-gray-600 text-lg">
                            This student dashboard is built with React, Tailwind CSS, Firebase Authentication, and mock APIs. It's designed for assignment purposes at BabyCode.
                        </p>
                    </div>
                </section>

                <Footer />

            </div>
        </div>
    )
}

export default LandingPage