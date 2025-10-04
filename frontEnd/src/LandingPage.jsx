import React from 'react';
import { FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';

const LandingPage = ({ onRoleSelect }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome!</h1>
      <h2 className="text-2xl mb-10">Please select your role to login</h2>
      <div className="flex space-x-8">
        <button
          onClick={() => onRoleSelect('student')}
          className="flex flex-col items-center px-8 py-6 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300"
        >
          <FaUserGraduate size={40} className="mb-2" />
          <span className="text-xl font-semibold">Student</span>
        </button>
        <button
          onClick={() => onRoleSelect('teacher')}
          className="flex flex-col items-center px-8 py-6 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition-colors duration-300"
        >
          <FaChalkboardTeacher size={40} className="mb-2" />
          <span className="text-xl font-semibold">Teacher</span>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
