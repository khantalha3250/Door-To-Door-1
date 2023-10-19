import React from 'react'

const Register = () => {
  return (
    <>
         <div class="outer-login-container">
    <div class="login-container">
      <div class="login-box">
        <h2>Register</h2>
        <form class="login-form" action="#" method="post">
          <div class="input-container">
            <i class="fas fa-user"></i>
            <input type="text" name="username" placeholder="Username" required/>
          </div>
          <div class="input-container">
            <i class="fas fa-envelope"></i>
            <input type="email" name="email" placeholder="Email" required/>
          </div>
          <div class="input-container">
            <i class="fas fa-phone"></i>
            <input type="tel" name="phone" placeholder="Phone Number" required/>
          </div>
          <div class="input-container">
            <i class="fas fa-lock"></i>
            <input type="password" name="password" placeholder="Password" required/>
          </div>
          <button class="login-button" type="submit">Register</button>
        </form>
      </div>
    </div>
  </div>
    </>
  )
}

export default Register