import React from 'react';

function Projects() {
  const projectList = [
  {
    name: "Order In The Coup",
    // Note: No "public", no "src", no "assets" in the path!
    img: "/images/lily2.png", 
    desc: "Integrated Google Gemini AI to generate suggested actions from scanned documents."
  },
  {
    name: "MERN To-Do List",
    img: "/images/lily2.png",
    desc: "A full-stack application with an event calendar developed using the MERN stack."
  },
  {
    name: "Applied Machine Learning",
    img: "/images/lily2.png",
    desc: "Implementations of LeNet-5, K-Means clustering, and Q-learning algorithms."
  }
  ];

  return (
    <section id="projects">
      <h2>projects</h2>
      
      <div className="project-grid">
        {myProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <img 
              src={project.img} 
              className="project-image" 
              alt={project.title} 
            />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;