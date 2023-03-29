import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

import logo from "../assets/energized.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <img src={logo} width="250" alt="Footer Logo" />
          <div className="footer-info">
            <p>131 Iroquois Street Southgate, MI 48195</p>
            <p>+1-613-555-0192</p>
            <p>contact@energized.com</p>
          </div>
          <div className="footer-social">
            <a href="http://facebook.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                className="social-icon"
                icon={faFacebook}
                size="3x"
                color="rgb(36, 94, 36)"
              />
            </a>
            <a href="http://instagram.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                className="social-icon"
                icon={faInstagram}
                size="3x"
                color="rgb(36, 94, 36)"
              />
            </a>
            <a href="http://youtube.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                className="social-icon"
                icon={faYoutube}
                size="3x"
                color="rgb(36, 94, 36)"
              />
            </a>
          </div>
        </div>
        <div className="dev-logo">
          <a
            href="https://github.com/Carlos-Beckhauser"
            target="_blank"
            rel="noreferrer"
          >
            <h1>CARLOS BECKHAUSER - WEB DEVELOPMENT</h1>
          </a>
        </div>
      </footer>
    </>
  );
};
export default Footer;
