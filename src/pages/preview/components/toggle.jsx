import React, { useState } from 'react';
import SignUp from './SignUp';
import LogIn from './LogIn';

const Toggle = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);

  const togglePage = () => {
    setIsLoginPage(!isLoginPage);
  };

  return (
    <div className="app-container">
      {isLoginPage ? (
        <LogIn togglePage={togglePage} />
      ) : (
        <SignUp togglePage={togglePage} />
      )}
    </div>
  );
};

export default Toggle;
