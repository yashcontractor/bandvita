import React from 'react';
import Title from './components/Title';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Title />
      <div className="forms-container">
        <SignupForm />
        <LoginForm />
      </div>
    </div>
  );
};

export default App;