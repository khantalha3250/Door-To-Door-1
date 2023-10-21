import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Authentication = ({ setUser }) => {
  const [userName, setUserName] = useState(''); // Initialize userName state
  const navigate = useNavigate();

  const handleChange = (event) => {
    const username = event.target.value;
    setUserName(username); // Update the userName state
  };

  const handleLogin = () => {
    // Perform login logic and get user information

    const loginSuccessful = true;
    const user = loginSuccessful ? { username: userName } : null;

    if (loginSuccessful) {
      // Set the user state and navigate
      setUser(user);
      navigate('/');
    }
  };

  return (
    <>
      <div className="outer-login-container">
        <div className="login-container">
          <div className="login-box">
            <h2>Login</h2>
            <form className="login-form">
              <div className="input-container">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-container">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                className="login-button"
                type="button"
                onClick={handleLogin}
              >
                Login
              </button>
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
