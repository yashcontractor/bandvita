// src/components/LoginPage.js
import React from 'react';
import '../App.css';

const LoginPage = () => {
  return (
    <div>
      <h1 className="main-title">BandVita</h1>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />

        <button id="login_btn" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
