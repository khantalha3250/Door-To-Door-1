import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import the axios library

const Register = ({ setUser }) => {
  const [userDetails, setUserDetails] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleRegister = async () => {
    try {
      // Perform registration logic and get user information
      const registrationData = {
        username: userDetails.username,
        email: userDetails.email,
        phone: userDetails.phone,
        password: userDetails.password,
      };

      // Make an HTTP POST request to your server
      const response = await axios.post('http://localhost:3001/register', registrationData);

      if (response.status === 200) {
        
        console.log(registrationData) // Assuming your server returns user data upon successful registration
        setUser(registrationData);
        navigate('/');
      }
    } catch (error) {
      // Handle registration error here
      console.error('Registration failed:', error);
    }
  };
  return (
    <>
      <div className="outer-login-container">
        <div className="login-container">
          <div className="login-box">
            <h2>Register</h2>
            <form className="login-form" action="/register" method='post'>
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
                <i className="fas fa-envelope"></i>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
              </div>
              <div className="input-container">
                <i className="fas fa-phone"></i>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
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
                onClick={handleRegister}
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
