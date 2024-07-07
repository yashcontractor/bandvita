// SignupPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import testData from './testData.json'; // Import testData.json

const SignupPage = () => {
  const navigate = useNavigate();
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

  const isValidEmail = (email) => {
    // Your email validation logic here
    return true; // For simplicity, assume email is always valid
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate username and password
    if (!formData.username.trim() || !formData.password.trim()) {
      setError('Please enter both username and password.');
      return;
    }

    // Validate email
    if (!isValidEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Create a new user object
    const newUser = {
      username: formData.username,
      password: formData.password,
      email: formData.email,
      age: formData.age,
      gender: formData.gender,
      testResults: [] // Add an empty array for test results
    };

    // Update your data storage (e.g., testData.json)
    testData.push(newUser);

    // Navigate to the login page
    navigate('/login');
  };

  return (
    <div>
      <h1 className="main-title1">BandVita</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" value={formData.username} onChange={handleInputChange} />
        
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} />
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
        
        <label htmlFor="age">Age</label>
        <input type="number" id="age" name="age" min="0" max="100" value={formData.age} onChange={handleInputChange} />
        
        <label htmlFor="gender">Gender</label>
        <select id="gender" name="gender" value={formData.gender} onChange={handleInputChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        
        {error && <p className="error-message">{error}</p>}
        
        <button id="signup1_btn" type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;
