// src/components/LoginForm.jsx
/* import React from "react";
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

export default LoginForm; */
import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);

    // Здесь можно добавить отправку на сервер
    // fetch("/api/login", { method: "POST", body: JSON.stringify({ email, password }) })
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="options">
        <label>
          <input type="checkbox" /> Remember me
        </label>
        <a href="#" className="forgot-password">Забыли пароль?</a>
      </div>
      <button className="login-btn" onClick={handleLogin}>
        Log in
      </button>
    </div>
  );
};

export default LoginForm;
