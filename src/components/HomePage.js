// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Double-check the relative path here

const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="main-title">BandVita</h1>
      <div className="btn-container">
        <Link to="/login">
          <button id="login_btn">
            <span>Login</span>
          </button>
        </Link>
        <Link to="/signup">
          <button id="signup_btn">
            <span>Sign Up</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
