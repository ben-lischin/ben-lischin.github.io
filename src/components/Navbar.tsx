import { useState, useEffect, useLayoutEffect, useRef, useCallback } from "react";

const Navbar = () => {
  const defaultSection = "home";
  const headerRef = useRef<HTMLElement>(null);

  const [activeSection, setActiveSection] = useState(defaultSection);
  const [lock, setLock] = useState(false);
  const [targetSection, setTargetSection] = useState<string | null>(null);
  const [navTop, setNavTop] = useState<number | null>(null);

  const updateNavPosition = useCallback(() => {
    const header = headerRef.current;
    if (!header) return;

    const gap = window.innerWidth <= 768 ? 2 : 5;

    const navHeight = header.offsetHeight;
    const startTop = window.innerHeight - navHeight - gap;
    const endTop = gap;

    const newTop = Math.max(endTop, startTop - window.scrollY);
    setNavTop(newTop);
  }, []);

  const handleClick = (section: string) => {
    setActiveSection(section);
    setLock(true);
    setTargetSection(section);

    const targetElement = document.getElementById(section);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = defaultSection;

      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          currentSection = id || defaultSection;

          if (lock && targetSection && currentSection === targetSection) {
            setLock(false);
            setTargetSection(null);
          }
        }
      });

      if (!lock) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lock, targetSection]);

  // drives the vertical position
  useLayoutEffect(() => {
    updateNavPosition();

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateNavPosition();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", updateNavPosition);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateNavPosition);
    };
  }, [updateNavPosition]);

  return (
    <header
      ref={headerRef}
      style={navTop !== null ? { top: `${navTop}px` } : undefined}
    >
      <nav>
        <a
          href="#home"
          className={`home${activeSection === "home" ? " active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            handleClick("home");
          }}
        >
          Home
        </a>
        <a
          href="#experience"
          className={`section${activeSection === "experience" ? " active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            handleClick("experience");
          }}
        >
          Experience
        </a>
        <a
          href="#projects"
          className={`section${activeSection === "projects" ? " active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            handleClick("projects");
          }}
        >
          Projects
        </a>
        <a
          href="#education"
          className={`section${activeSection === "education" ? " active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            handleClick("education");
          }}
        >
          Education
        </a>
      </nav>
    </header>
  );
};

export default Navbar;