import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            {/* Wrap your name in a link */}
            <a href="#home">
              <h4>alyssa nguyen</h4>
            </a>
          </div>
          <ul className="nav-links">
            <li><a href="#about">about</a></li>
            <li><a href="#projects">projects</a></li>
            <li><a href="#resume">resume</a></li>
            <li><a href="#contact">contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Main Content Sections - OUTSIDE the nav */}

      <section id="home">
        <Header />
      </section>
      
      <About />
      <Projects />

      <section id="resume">
        <Resume />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
export default App;
