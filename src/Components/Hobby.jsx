import React from "react";
import "../Css/Hobby.css";
const Hobby = () => {
  const hobbiesData = [
    {
      title: "Reading Scriptures",
      description: "I enjoy exploring various genres and authors.",
    },
    {
      title: "Playing Chess",
      description: "A strategic game that challenges the mind.",
    },
    {
      title: "Cricket",
      description: "Passionate about the thrill and teamwork in cricket.",
    },
    {
      title: "Fitness",
      description: "Maintaining a healthy lifestyle through regular workouts.",
    },
    {
      title: "Football",
      description: "Enjoying the energy and skill of football matches.",
    },
    {
      title: "Gardening",
      description: "Cultivating plants and creating a green oasis.",
    },
    {
      title: "Cooking",
      description: "Experimenting with ingredients and creating delicious dishes.",
    },
  ];

  return (
    <div className="hobby-container">

      <h1 className="section-title">My Hobbies</h1>


      <div className="hobby-content">
        {hobbiesData.map((hobby, index) => (
          <div className="hobby-card" key={index}>
            <h1 className="title">{hobby.title}</h1>
            <p className="hobyDetails">{hobby.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobby;
