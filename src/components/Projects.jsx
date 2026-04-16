export default function Projects() {
  const notionUrl = "https://www.notion.so/making-my-website-3-2fdf2341f935808885abdf4ff6476959?source=copy_link"; 

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {/* We use an <a> tag to make the whole card clickable */}
        <a href={notionUrl} target="_blank" rel="noopener noreferrer" className="project-card-link">
          <div className="project-card-featured">
            <div className="project-image-container">
              {/* Use your lily2 image as a cover for the card */}
              <img src="/images/notioncover.png" alt="Website Documentation" className="project-image" />
              <div className="overlay-text">View Documentation</div>
            </div>
            <div className="project-info">
              <h3>Portfolio Website</h3>
              <p>Learn How I Made This Website!</p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}