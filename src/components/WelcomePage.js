// WelcomePage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';

const WelcomePage = () => {
  const location = useLocation();
  const isAdmin = location.state && location.state.isAdmin;

  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Welcome {isAdmin ? 'Admin' : 'User'}</h1>
    </div>
  );
};

export default WelcomePage;
