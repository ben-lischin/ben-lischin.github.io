import Navbar from './components/Navbar.tsx';
import Home from './components/Home.tsx';
import Experience from './components/Experience.tsx';
import Projects from './components/projects/Projects.tsx';
import Education from './components/Education.tsx';
import ParticlesBackground from "./components/particles/ParticlesBackground.tsx";

function App() {
  return (
    <>
      <ParticlesBackground id="particles"/>
      <Navbar />
      <Home />
      <Experience />
      <Projects />
      <Education />
      <a href="#home" className="to-top"
       onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
       }}
      >
        &#9650;
      </a>
      <footer>
        <p>Last updated July 2025</p>
      </footer>
    </>
  );
}

export default App;