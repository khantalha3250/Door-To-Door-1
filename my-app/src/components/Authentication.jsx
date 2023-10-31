import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
const Authentication = ({ setUser }) => {
  const [loginDetails, setLoginDetails] = useState({username:'',password:''}); 
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const {name,value} = event.target
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    }); 
  };

  const handleLogin = async () => {
    try {
      // Perform registration logic and get user information
      const loginData = {
        username: loginDetails.username,
        password: loginDetails.password,
      };
      console.log(loginData)
      
      const response = await axios.post('http://localhost:3001/login', loginData);

      if (response.status === 200) {
        
        console.log(loginData) 
        setUser(loginData);
        setUserData(response.data)
        console.log(userData)
        navigate('/');
      }
    } catch (error) {
      // Handle registration error here
      console.error('login failed:', error);
    }
  };

  return (
    <>
      <div className="outer-login-container">
        <div className="login-container">
          <div className="login-box">
            <h2>Login</h2>
            <form className="login-form" action='/login' method='post'>
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
                  onChange={handleChange}
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
