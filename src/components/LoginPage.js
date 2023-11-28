// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Check credentials
    if (username === 'Admin' && password === 'admin123') {
      navigate('/welcome');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div>
      <h1 className="main-title">BandVita</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="error-message">{error}</p>}

        <button id="login_btn" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
