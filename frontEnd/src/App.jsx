import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage.jsx';
import LoginPage from './LoginPage.jsx';
import SignupPage from './SignupPage.jsx';
// Removed import of non-existent TestTailwind.jsx to fix error

// You can also add Dashboard components here
// import StudentDashboard from './StudentDashboard.jsx';
// import TeacherDashboard from './TeacherDashboard.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login/student" element={<LoginPage role="student" />} />
        <Route path="/login/teacher" element={<LoginPage role="teacher" />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* Add routes for after login */}
        {/* <Route path="/dashboard/student" element={<StudentDashboard />} /> */}
        {/* <Route path="/dashboard/teacher" element={<TeacherDashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
