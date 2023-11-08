import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <a className="navbar-brand" href="/">Malicious Node</a>
          <ul className="nav-links ">
            <li><a href="/registration">Registration</a></li>
            <li><a href="/users">Users</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
