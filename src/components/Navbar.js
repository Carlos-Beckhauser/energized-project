import React from "react";

import "./Navbar.css";

import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navigation = ({ handleClick }) => {
  return (
    <>
      <div className="mobile-menu">
        <div className="mobile-logo">
          <h2>ENERGIZED</h2>
        </div>
        <div className="mobile-icon">
          <FontAwesomeIcon icon={faBars} size="3x" onClick={handleClick} />
        </div>
      </div>

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
            <Link className="navbar-links" to="/products">
              <li>Products</li>
            </Link>
          </ul>
        </div>
      </nav>
      <hr className="nav-line"></hr>
    </>
  );
};

export default Navigation;
