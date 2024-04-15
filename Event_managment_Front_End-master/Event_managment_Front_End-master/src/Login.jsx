import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {useEffect } from 'react';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const navigate = useNavigate();
      const handleSubmit = (e) => {
        e.preventDefault();
      
        // Check if the entered email and password match any team member's data
        const foundMember = data.find((member) => member.email === email && member.password === pass);
      
        if (foundMember) {
          // Redirect to the home page
          navigate("/home");
        } else {
          // Handle the invalid login credentials
          console.error('Invalid email or password');
       }
  }
    const handleSubmitR = (e) => {
      navigate("/register")
     }
         
     const [data, setData] = useState([]);
    
     useEffect(() => {
       fetch('http://localhost:5000/team')
       .then((response) => {
        return response.json()
       })
       .then((responseData) => {
           console.log(responseData)
           setData(responseData);
         })
       .catch((error) => {
           console.log('error', error);
         });
     }, []);


    return (
        <div className="login-page-container">
  <div className="auth-form-container">
    <h2 className="form-title">Login</h2>
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="email" htmlFor="Email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />
      </div>
      <div className="form-group">
        <label className="password" htmlFor="Password">Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password" />
      </div>
      <button type="submit" className="btn-login" onClick={handleSubmit}>Log In</button>
    </form>
    <button className="link-btn" onClick={handleSubmitR}>Don't have an account? Register here.</button>
  </div>
</div>

    )
}

export default Login;