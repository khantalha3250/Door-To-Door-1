import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Authentication = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform your login logic here, e.g., validate credentials

    // If login is successful, navigate to the home page
    // Replace the following with your actual login logic
    const loginSuccessful = true;

    if (loginSuccessful) {
      navigate('/');
    }
  };

  return (
    <>
      <div className="outer-login-container">
        <div className="login-container">
          <div className="login-box">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleLogin}>
              <div className="input-container">
                <i className="fas fa-user"></i>
                <input type="text" name="username" placeholder="Username" required />
              </div>
              <div className="input-container">
                <i className="fas fa-lock"></i>
                <input type="password" name="password" placeholder="Password" required />
              </div>
              <button className="login-button" type="submit">Login</button>
            </form>
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Authentication;
