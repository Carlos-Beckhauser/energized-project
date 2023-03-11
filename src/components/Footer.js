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
          <img src={logo} width="180" alt="Footer Logo" />
          <div className="footer-info">
            <p>131 Iroquois Street Southgate, MI 48195</p>
            <p>+1-613-555-0192</p>
            <p>contact@energized.com</p>
          </div>
          <div className="footer-social">
            <FontAwesomeIcon
              className="social-icon"
              icon={faFacebook}
              size="3x"
            />
            <FontAwesomeIcon
              className="social-icon"
              icon={faInstagram}
              size="3x"
            />
            <FontAwesomeIcon
              className="social-icon"
              icon={faYoutube}
              size="3x"
            />
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;