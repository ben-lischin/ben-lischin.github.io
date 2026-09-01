import Navbar from './components/Navbar.tsx';
import Home from './components/Home.tsx';
import Experience from './components/experience/Experience.tsx';
import Projects from './components/projects/Projects.tsx';
import Education from './components/Education.tsx';
import HexBackground from './components/background/hex/HexBackground.tsx'

function App() {
  return (
    <>
      <HexBackground />
      <Navbar />
      <Home />
      <Experience />
      <Projects />
      <Education />
      <a
        href="#home"
        className="to-top"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        &#9650;
      </a>
      <footer>
        <p>Last updated August 2026</p>
      </footer>
    </>
  );
}

export default App;
