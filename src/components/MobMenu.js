import React from "react";

import "./MobMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MobMenu = ({ show, handleClose }) => {
  return (
    <section className="mobmenu" show={show}>
      <div className="menu-close">
        <FontAwesomeIcon icon={faClose} size="4x" onClick={handleClose} />
      </div>

      <ul className="nav-menu">
        <Link className="nav-links" to="/" onClick={handleClose}>
          <li>Home</li>
        </Link>
        <Link className="nav-links" to="/about-us" onClick={handleClose}>
          <li>About us</li>
        </Link>
        <Link className="nav-links" to="/products" onClick={handleClose}>
          <li>Products</li>
        </Link>
      </ul>
    </section>
  );
};

export default MobMenu;
