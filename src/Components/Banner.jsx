import "../Css/Banner.css";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="main-div">
      <div className="text-container">
        <h3>Hi! I am Rakesh Kumar</h3>
        <h2>Frontend Developer , Backend Developer , Product - Designer</h2>
        <p>
          Full-Stack Developer with a knack for crafting seamless
          digitalexperiences. My journey extends from front-end, finesse to
          back-end functionality, complemented by a passion for product design
          in Figma. Let's collaborate at the intersection of technology and
          design to build something extraordinary
        </p>

        <div className="icons-container">
          <NavLink
            to="https://www.linkedin.com/in/rakesh-kumar-49476a260"
            className="icon"
          >
            <i className="fa-brands text-4xl fa-linkedin-in"></i>
          </NavLink>

          <NavLink to="https://github.com/mauryaaarav61" className="icon">
            <i className="fa-brands text-4xl fa-github"></i>
          </NavLink>

          <NavLink
            to="https://www.instagram.com/aaravmaurya01"
            className="icon"
          >
            <i className="fa-brands text-4xl fa-instagram"></i>
          </NavLink>

          <NavLink
            to="https://www.facebook.com/profile.php?id=100076092635868&mibextid=ZbWKwL"
            className="icon"
          >
            <i className="fa-brands text-4xl fa-facebook"></i>
          </NavLink>
        </div>

        <NavLink className="contact-button" to="/Contacts">
          Contact Me
        </NavLink>
      </div>

      <NavLink to='/About'><div className="image-container">
        <img
          className="profile-image"
          src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydGZvbGlvJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D"
          alt="Profile"
        />
      </div>
      </NavLink>
    </div>
  );
};

export default Banner;
