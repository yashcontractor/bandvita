import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const SignupPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    age: '',
    gender: 'male',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isValidEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate that username and password are not empty
    if (!formData.username.trim() || !formData.password.trim()) {
      setError('Please enter both username and password.');
      return;
    }

    // Assuming you have some additional validation checks here before storing the data
    if (!isValidEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    // Store the user data in local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({
      username: formData.username,
      password: formData.password,
    });
    localStorage.setItem('users', JSON.stringify(users));

    // Clear any previous error and navigate back to the login page
    setError('');
    navigate('/login');
  };

  return (
    <div>
      <h1 className="main-title">BandVita</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          min="0"
          max="100"
          value={formData.age}
          onChange={handleInputChange}
        />

        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <div style={{ marginBottom: '1.5rem' }}></div>

        {error && <p className="error-message">{error}</p>}

        <button id="signup1_btn" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
