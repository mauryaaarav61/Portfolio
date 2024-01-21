import React from "react";
import { NavLink } from "react-router-dom";
import "../Css/Footer.css"; 


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          &copy; {currentYear} Rakesh Kumar <span>All Rights Reserved</span>
          <hr />
        </div>

        <div className="footer-right">
          <NavLink to="/About" className="footer-link">
            About
          </NavLink>
          <NavLink to="#" className="footer-link">
            Privacy Policy
          </NavLink>
          <NavLink to="#" className="footer-link">
            Licensing
          </NavLink>
          <NavLink to="/Contacts" className="footer-link">
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
