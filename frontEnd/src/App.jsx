import React, { useState } from 'react';
import LandingPage from './LandingPage.jsx';
import LoginPage from './LoginPage.jsx';
import SignupPage from './SignupPage.jsx';
import TestTailwind from './TestTailwind.jsx';

function App() {
  const [role, setRole] = useState(null); // 'student', 'teacher', or null
  const [isSignup, setIsSignup] = useState(false);

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setIsSignup(false);
  };

  const handleBack = () => {
    setRole(null);
    setIsSignup(false);
  };

  const handleSignupClick = () => {
    setIsSignup(true);
    setRole(null);
  };

  if (isSignup) {
    return <SignupPage onBack={handleBack} />;
  }

  if (!role) {
    return (
      <>
        <LandingPage onRoleSelect={handleRoleSelect} onSignupClick={handleSignupClick} />
        <TestTailwind />
      </>
    );
  }

  return <LoginPage role={role} onBack={handleBack} />;
}

export default App;
