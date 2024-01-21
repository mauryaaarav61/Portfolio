import React from "react";
import { FaReact, FaNodeJs, FaCss3, FaHtml5 } from "react-icons/fa";
import { DiJavascript1, DiPython } from "react-icons/di";
import { SiRedux, SiFigma, SiTailwindcss, SiBootstrap, SiMongodb, SiExpress } from "react-icons/si";

import '../Css/About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2>Hi, I'm Rakesh Kumar !</h2>
        <p id="intro">
          A passionate developer with expertise in:
        </p>
        <div className="skills">
          <FaReact className="icon" /> ReactJS | <SiRedux className="icon" /> Redux |{" "}
          <DiJavascript1 className="icon" /> JavaScript | <FaHtml5 className="icon" /> HTML5 |{" "}
          <FaCss3 className="icon" /> CSS | <SiTailwindcss className="icon" /> Tailwind CSS |{" "}
          <SiBootstrap className="icon" /> Bootstrap | <FaNodeJs className="icon" /> Node.js |{" "}
          <SiExpress className="icon" /> Express.js | <SiMongodb className="icon" /> MongoDB |{" "}
          <DiPython className="icon" /> DSA in Python | <SiFigma className="icon" /> Figma
          
        </div>
        <p>
          I thrive on creating responsive and user-friendly web applications, utilizing a
          combination of cutting-edge technologies.
        </p>
        <p>
          In <strong>2014</strong>, I successfully completed my <strong> intermediate</strong> education.
        </p>
        <p>
          In <strong>2012</strong>, I achieved a <strong>high-school</strong> diploma.
        </p>
        <p>
          My educational journey also includes an <strong>Advanced Diploma in Computerized Accounting </strong>.
        </p>
        <p>
          Committed to honing my skills, I completed a <strong>Software Engineering apprenticeship at Navgurukul</strong>,
          
        </p>
        <p>
          comprehensive training in <strong>Full Stack Development at HyperVerge Academy</strong>.
        </p>
        
      </div>
    </div>
  );
};

export default About;
