import React from "react";

import "./Navbar.css";

import Logo from "../assets/logo.png";

const Navigation = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <h1>energized</h1>
          <img src={Logo} width="100" height="100" alt="Navbar Logo" />
        </div>

        <div className="navbar-menu">
          <ul>
            <li>About us</li>
            <li>Products</li>
          </ul>
        </div>
      </nav>
      <hr></hr>
    </>
  );
};

export default Navigation;
