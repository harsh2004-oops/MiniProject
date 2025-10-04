import React from 'react';
import { FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';
import './LandingPage.css';

const LandingPage = ({ onRoleSelect, onSignupClick }) => {
  return (
    <div className="landing-page">
      <h1 className="welcome-title">Welcome!</h1>
      <h2 className="subtitle">Please select your role to login or sign up</h2>
      <div className="role-buttons">
        <button
          onClick={() => onRoleSelect('student')}
          className="role-button student"
        >
          <FaUserGraduate className="role-icon" size={40} />
          <span className="role-label">Student</span>
        </button>
        <button
          onClick={() => onRoleSelect('teacher')}
          className="role-button teacher"
        >
          <FaChalkboardTeacher className="role-icon" size={40} />
          <span className="role-label">Teacher</span>
        </button>
      </div>
      <button onClick={onSignupClick} className="signup-button">
        Sign Up
      </button>
    </div>
  );
};

export default LandingPage;
