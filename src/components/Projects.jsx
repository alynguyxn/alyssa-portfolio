// 1. Define the data (Make sure this name matches the map below!)
const myProjects = [
  { name: "Order In The Coup", img: "/images/lily2.png", desc: "..." },
  { name: "MERN To-Do List", img: "/images/lily2.png", desc: "..." },
  { name: "Applied Machine Learning", img: "/images/lily2.png", desc: "..." }
];

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {/* 2. Map through the EXACT name you used above */}
        {myProjects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.img} className="project-image" />
            <div className="project-info">
               <h3>{project.name}</h3>
               <p>{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}