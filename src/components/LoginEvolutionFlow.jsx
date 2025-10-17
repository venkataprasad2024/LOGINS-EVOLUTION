import React, { useState } from 'react';
import Login90s from './Login90s';
import LoginMid20s from './LoginMid20s';
import Login2020s from './Login2020s';
import LoginModern from './LoginModern';

const loginComponents = [Login90s, LoginMid20s, Login2020s, LoginModern]; // Array of login components

const LoginEvolutionFlow = () => {
  const [step, setStep] = useState(0); // State to track current step

  const handleLoginSuccess = () => {
    if (step < loginComponents.length - 1) {
      setStep((prev) => prev + 1); // Move to next step (era)
    }
  };

  const CurrentLogin = loginComponents[step]; // Get the current login component based on the step

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* Render the current login component */}
      <CurrentLogin onLoginSuccess={handleLoginSuccess} />

    </div>
  );
};

export default LoginEvolutionFlow;
