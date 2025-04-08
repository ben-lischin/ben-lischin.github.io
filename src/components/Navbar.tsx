import { useState, useEffect } from "react";

const Navbar = () => {
    const defaultSection = "home";
    
    const [activeSection, setActiveSection] = useState(defaultSection);
    const [lock, setLock] = useState(false);
    const [targetSection, setTargetSection] = useState<string | null>(null);

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

    return (
        <header>
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