import React, { useState } from 'react';
import './Registration.css'
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';

function Registration() {

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
              placeholder='username'
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='email'
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder='password'
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="isVerified">Is Verified:</label>
            <input
              type="checkbox"
              id="isVerified"
              name="isVerified"
              className="checkbox"
            />
          </div>

          <button type="submit" className="submit-button">Register</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Registration;
