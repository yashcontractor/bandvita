import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Top Navigation Bar */}
      <nav className="top-nav">
        <div className="logo">BandVita</div>
        {/* Add other navigation items here */}
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">Empowering Medical Research through Smart Health Monitoring</h1>
        <p className="hero-subtitle">BandVita is a cutting-edge smart health band...</p>
        <div className="hero-ctas">
          <Link to="/login" className="cta-button">Login</Link>
          <Link to="/signup" className="cta-button">Sign Up</Link>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h2>About BandVita</h2>
        <p>BandVita is a cutting-edge smart health band designed specifically for medical researchers...</p>
      </div>
      {/* Add other sections as needed */}
    </div>
  );
};

export default HomePage;
