// SignupPage.js
import React from 'react';
import '../App.css';

const SignupPage = () => {
  return (
    <div>
      <h1 className="main-title">BandVita</h1>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="age">Age</label>
        <input type="number" id="age" name="age" />

        <label htmlFor="gender">Gender</label>
        <select id="gender" name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <div style={{ marginBottom: '1.5rem' }}></div>

        <button id="signup1_btn" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
