import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import './LoginPage.css';

const LoginPage = ({ role, onBack }) => {
  const roleCapitalized = role.charAt(0).toUpperCase() + role.slice(1);

  return (
    <div className="login-page">
      <div className="login-form-container">
        <button onClick={onBack} className="back-button">
          <IoArrowBack size={24} />
        </button>
        <h1 className="login-title">{roleCapitalized} Login</h1>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" id="username" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="password_field" className="form-label">Password</label>
            <input type="password" id="password_field" className="form-input" />
          </div>
          <div className="form-group">
            <button type="submit" className="submit-button">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;