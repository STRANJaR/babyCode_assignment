import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import SignUp from './pages/SignUp.jsx';
import AddStudent from './pages/AddStudent.jsx';
import PrivateRoute from './components/PrivateRoutes.jsx';
import StudentDetails from './pages/StudentDetails.jsx';
import LandingPage from './pages/LandingPage.jsx';
import PageNotFound from './pages/PageNotFound.jsx';



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="*" element={<PageNotFound />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/add-student"
        element={
          <PrivateRoute>
            <AddStudent />
          </PrivateRoute>
        }
      />
      <Route
        path="/student/:id"
        element={
          <PrivateRoute>
            <StudentDetails />
          </PrivateRoute>
        }
      />
    </Routes>

  )
}

export default App