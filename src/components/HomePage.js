import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <nav className="top-nav">
        <div className="logo">BandVita</div>
      </nav>

      <div className="hero-section">
        <h1 className="hero-title">Empower Your Health</h1>
        <p className="hero-subtitle">Join the revolution in smart health monitoring.</p>
        <div className="hero-ctas">
          <Link to="/login" className="cta-button">Log In</Link>
          <Link to="/signup" className="cta-button">Sign Up</Link>
        </div>
      </div>

      <div className="about-section">
        <h2>About BandVita</h2>
        <p>Discover the future of personal health technology with BandVita. Our smart health band provides unparalleled insights for medical researchers and individuals alike.</p>
      </div>
    </div>
  );
};

export default HomePage;
