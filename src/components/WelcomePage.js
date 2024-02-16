// WelcomePage.js
import React from 'react';
import '../App.css';

const WelcomePage = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser')); // Retrieve the logged-in user

  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Welcome, {currentUser.username}!</h1>
      <h2>Your Test Results:</h2>
      <ul>
        {currentUser.testResults.map((result, index) => (
          <li key={index}>Test {index + 1}: {result}</li>
        ))}
      </ul>
    </div>
  );
};

export default WelcomePage;
