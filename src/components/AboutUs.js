import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/energized.png";
import prod from "../assets/1.png";
import "../components/AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <section>
        <div className="aboutContainer">
          <img src={logo} alt="Company Logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <br></br>
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <img src={prod} width="500" alt="Product" />
          <p>
            Right here on left we have a sample of our t-shirt.
            <br></br>
            It is a Power Felt fabric, that provides confort and energy to your
            devices.
            <br></br>
            It's easy to wash, and dry in 2 hours.
            <br></br>
            We have other color options.
            <br></br>
            <b>Did you get interested to buy?</b>
            <Link className="about-btn" to="/products">
              <button>Click here</button>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
