import React from "react";
import { Link } from "react-router-dom";

import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero-container">
        <div className="hero">
          <p>
            Did you ever imagine conduit your body energy to your devices ?
            Sounds like crazy, but the unknow is exacly like this.
            <p></p>
            <span>The future has come</span>
          </p>
          <Link to="/about-us">
            <button>Click here</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hero;
