import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Registration.css'
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';

function Registration() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    if(!userName){
      alert("UserName is required");
      return;
    }

    if(!email){
      alert("Email is required");
      return;
    }

    if(!password){
      alert("Password is required");
      return;
    }

    
    const response = await axios.post("/signup", {
      userName:  userName,
      email: email,
      password: password,
    })

    alert(response?.data?.message);

    if(response?.data?.success){
      window.location.href = "/users";
    }
  };

  useEffect(()=>{
    const storageUser = JSON.parse(localStorage.getItem("user") || '{}');

    if(storageUser?.email){
      alert("You are already logged in!");
      window.location.href = "/";
    }

  }, [])


  return (
    <>
    <Navbar/>
      <div className="registration-container">
        <h2>Registration</h2>
        <form className="registration-form">

          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={userName}
              placeholder='Enter username'
              required
              className="form-control"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Enter email'
              value={email}
              required
              className="form-control"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder='password'
              required
              className="form-control"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>


          <button type="button" 
          className="submit-button"  
          onClick={register}>Register
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Registration;
