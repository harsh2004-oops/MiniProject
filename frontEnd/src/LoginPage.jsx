import React from 'react';
import { IoArrowBack } from 'react-icons/io5';

const LoginPage = ({ role, onBack }) => {
  const roleCapitalized = role.charAt(0).toUpperCase() + role.slice(1);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-xl w-full max-w-md relative">
        <button onClick={onBack} className="absolute top-4 left-4 text-gray-600 hover:text-gray-800">
          <IoArrowBack size={24} />
        </button>
        <h1 className="text-3xl font-bold mb-6 text-center">{roleCapitalized} Login</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input type="text" id="username" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <label htmlFor="password_field" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password_field" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;