// src/components/LoginForm.jsx
import React from "react";
import "./LoginForm.css"; 

const LoginForm = () => {
  return (
    <div className="login-container">
        <h2 className="login-title">Login</h2>
      <input type="email" placeholder="Email" className="input" />
      <input type="password" placeholder="Password" className="input" />
      <div className="options">
        <label>
          <input type="checkbox" /> Remember me
        </label>
        <a href="#" className="forgot-password">Забыли пароль?</a>
      </div>
      <button className="login-btn">Log in</button>
    </div>
  );
};

export default LoginForm;