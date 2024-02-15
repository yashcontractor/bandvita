// WelcomePage.js
import React from 'react';
import '../App.css';

const WelcomePage = () => {
  const username = localStorage.getItem('currentUser'); // Retrieve the username of the logged-in user

  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Welcome, {username}!</h1> {/* Display personalized welcome message */}
    </div>
  );
};

export default WelcomePage;
