import React from "react";

import "./Navbar.css";

import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link className="navbar-logo" to="/">
            <h1>energized</h1>
          </Link>
          <img src={Logo} width="100" height="100" alt="Navbar Logo" />
        </div>

        <div>
          <ul className="navbar-menu">
            <Link className="navbar-links" to="/">
              <li>Home</li>
            </Link>
            <Link className="navbar-links" to="/about-us">
              <li>About us</li>
            </Link>
            <Link className="navbar-links">
              <li>Products</li>
            </Link>
          </ul>
        </div>
      </nav>
      <hr></hr>
    </>
  );
};

export default Navigation;
