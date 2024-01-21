import React, { useState } from "react";
import { FaBookOpen } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import "../Css/Nav.css";
import Resume from "../Images/Rakesh CV.pdf";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={`header-container ${isMenuOpen ? "menu-open" : ""}`}>
        <div className="toggle-btn" onClick={toggleMenu}>
          {isMenuOpen ? (
            <IoMdClose className="icon" />
          ) : (
            <FaBookOpen className="icon" />
          )}
        </div>

        <div className="brand">
          <NavLink to='/'><h1 className="brand-name"> Rakesh Kumar</h1></NavLink>
        </div>

        <div className={`menu-links ${isMenuOpen ? "open" : ""}`}>
          <li id="home-btn">
            <NavLink to="/" onClick={toggleMenu}>
              {/* Home */}
              ...
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" onClick={toggleMenu}>
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contacts" onClick={toggleMenu}>
              Contact Me
            </NavLink>
          </li>
          <li>
            <button className="cv">
              <NavLink to={Resume} target="_blank" rel="noopener noreferrer">
                My CV
              </NavLink>
            </button>
          </li>
        </div>
      </div>
    </>
  );
};

export default Nav;
