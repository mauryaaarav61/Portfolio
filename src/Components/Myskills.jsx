import "../Css/MySkills.css"; 


const Expertise = () => {
  return (
    <div className="expertise-container">
      <h1 className="expertise-title">My Skills :</h1>
      <div className="box-container">
        <div className="text-container">
          <h1 className="text-title">My Proficiency In</h1>
          <p>
            I'm a versatile developer in these Skills I bring a harmonious blend
            of front-end and back-end technologies to deliver elegant and
            functional designs, complemented by a creative touch using Figma for
            intuitive product designs.
          </p>
        </div>
        <div className="skills-container">
          <p className="skill">Javascript</p>
          <p className="skill">ReactJS</p>
          <p className="skill">Redux</p>
          <p className="skill">HTML/CSS</p>
          <p className="skill">Tailwind CSS</p>
          <p className="skill">BootStrap</p>
          <p className="skill">Node Js</p>
          <p className="skill">Express js</p>
          <p className="skill">MongoDB</p>
          <p className="skill">DSA in Python</p>
          <p className="skill">Figma</p>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
