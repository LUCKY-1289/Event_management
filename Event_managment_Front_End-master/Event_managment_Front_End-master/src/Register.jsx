import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const Navigate = useNavigate();

  const handleLogin = (e) => {
    Navigate("/")
  }
  const handleSubmit = (e) => {
    console.log("hi")
    setName(e.target.parentElement.children[0].value)
    fetch('/register2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name })
    })
    
  }
  return (
    <div className="login-page-container">
      <div className="auth-form-container">
        <h2 className="form-title">Register</h2>
        <form className="register-form">
          <div className="form-group">
            <label className="full" htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" />
          </div>
          <div className="form-group">
            <label className="guntha" htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label className="heavy" htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password" />
          </div>
          <button type="submit" className="btn-login"  onClick={handleSubmit}>Register</button>
        </form>
        <button className="link-btn" onClick={handleLogin}>Already have an account? Login here.</button>
      </div>
    </div>
    
  );
}

export default Register;
