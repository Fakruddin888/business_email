import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    
      <nav>
        <ul className="Navbar">
          <li>
            <NavLink className="nav-bar-link" to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-bar-link" to="/about">
              About Us
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink className="nav-bar-link" to="/Contact">
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-bar-link"
              style={{
                backgroundColor: "yellow",
                padding: "5px",
                borderRadius: "4px",
              }}
              to="/"
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
