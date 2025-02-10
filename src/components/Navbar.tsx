import { useState, useEffect } from "react";

const Navbar = () => {
    const defaultSection = "home";
    
    const [activeSection, setActiveSection] = useState(defaultSection);

    const handleClick = (section: string) => {
        setActiveSection(section);
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
                    currentSection = id || "home";
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header>
            <nav>
                <a 
                    href="#home"  
                    className={`home${activeSection === "home" ? " active" : ""}`} 
                    onClick={() => handleClick("home")}
                >
                    Home
                </a>
                <a 
                    href="#experience"  
                    className={`section${activeSection === "experience" ? " active" : ""}`} 
                    onClick={() => handleClick("experience")}
                >
                    Experience
                </a>
                <a 
                    href="#projects"  
                    className={`section${activeSection === "projects" ? " active" : ""}`} 
                    onClick={() => handleClick("projects")}
                >
                    Projects
                </a>
                <a 
                    href="#education"  
                    className={`section${activeSection === "education" ? " active" : ""}`} 
                    onClick={() => handleClick("education")}
                >
                    Education
                </a>
            </nav>
        </header>
    );
}

export default Navbar;
