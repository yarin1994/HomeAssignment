import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/home");
  };

  return (
    <div className="welcome">
      <h2>Welcome to our website!</h2>
      <button onClick={navigateToHome}>Go to Home</button>
    </div>
  );
}

export default Welcome;
