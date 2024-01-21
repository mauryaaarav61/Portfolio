import React from "react";
import "../Css/Contacts.css";
import { NavLink } from "react-router-dom";

const Contacts = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out to me via email, phone, or through my social
          media profiles.
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <strong>Email:</strong>{" "}
            <NavLink to="mailto:rakesh22@navgurukul.org">
              rakesh22@navgurukul.org
            </NavLink>
          </div>
          <div className="contact-item">
            <strong>Phone:</strong>{" "}
            <NavLink to="tel:7668622900">+917668622900</NavLink>
          </div>
          <div className="contact-item">
            <strong>Social Media:</strong>
            <ul>
              <li>
                <NavLink to="https://twitter.com/Rakesh0123Kumar">
                  Twitter
                </NavLink>
              </li>
              <li>
                <NavLink to="https://www.linkedin.com/in/rakesh-kumar-49476a260">
                  LinkedIn
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
