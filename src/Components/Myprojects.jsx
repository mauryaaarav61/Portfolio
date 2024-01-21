import React from "react";
import "../Css/Myproject.css"; // Import your new CSS file
import { NavLink } from "react-router-dom";

const MyProjects = () => {
  return (
    <div className="main-container ">
      <h1 className="section-title">My Projects</h1>
      <div className="projects-container">
        <div className="project-card">
          <i>A Teach</i>
          <h1 className="project-title">A Teach Solutions</h1>
          <p>
            A-Teach Solution is My Dreem project I am currently developing,
            aimed at providing a unique and innovative solution in the education
            sector.
          </p>
          <button className="project-button">Check</button>
        </div>
        <div className="project-card">
          <i>S-mart</i>
          <h1 className="project-title">Ecommerce Website</h1>
          <p>
            I have created an E-commerce website, offering a seamless online
            shopping experience for a diverse range of products.
          </p>
          <NavLink to="https://react-ecom-s-mart.vercel.app/">
            <button className="project-button">Check</button>
          </NavLink>
        </div>
        <div className="project-card">
          <i>Universal news</i>
          <h1 className="project-title">News Website</h1>
          <p>
            In a Hackathon endeavor, I crafted a dynamic news website,
            delivering real-time and engaging news content.
          </p>
          <NavLink to="https://github.com/mauryaaarav61/newsweb">
            <button className="project-button">Check</button>
          </NavLink>
        </div>
        <div className="project-card">
          <i>Library management</i>
          <h1 className="project-title">Library management Web</h1>
          <p>
            In my second hackathon, I developed a comprehensive library
            management website, seamlessly integrating both front-end and
            back-end technologies for an efficient user experience.
          </p>
          <NavLink to="https://github.com/mauryaaarav61/libraryManagement">
            <button className="project-button">Check</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
