import React from 'react';

function Projects() {
  const myProjects = [
    { 
      title: "Order In The Coup", 
      desc: "KnightHacks 2025 AI Project", 
      img: "/src/assets/images/lily3.png" // Using an image I know you have!
    },
    { 
      title: "MERN To-Do", 
      desc: "Full-stack calendar app", 
      img: "/src/assets/images/lily3.png" 
    },
    { 
      title: "Portfolio", 
      desc: "This pixel art website", 
      img: "/src/assets/images/lily3.png" 
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