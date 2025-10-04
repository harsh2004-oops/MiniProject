import React, { useState } from 'react';
import LandingPage from './LandingPage.jsx';
import LoginPage from './LoginPage.jsx';
import TestTailwind from './TestTailwind.jsx';

function App() {
  const [role, setRole] = useState(null); // 'student', 'teacher', or null

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleBack = () => {
    setRole(null);
  };

  if (!role) {
    return (
      <>
        <LandingPage onRoleSelect={handleRoleSelect} />
        <TestTailwind />
      </>
    );
  }

  return <LoginPage role={role} onBack={handleBack} />;
}

export default App;
