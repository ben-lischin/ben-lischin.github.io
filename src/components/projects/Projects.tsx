import { useState } from "react";
import ProjectContent from "./projectContent";

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);
    const [visibleProject, setVisibleProject] = useState<string | null>(null);

    const clickProject = (projectName: string) => {
        setSelectedProject(projectName);
        setVisibleProject(projectName);
        
    }
    const hoverOn = (projectName: string) => {
        setVisibleProject(projectName);
    }
    const hoverOff = () => {
        setVisibleProject(selectedProject);
    }
    const closeProject = () => {
        setSelectedProject(null);
        setVisibleProject(null);
    }

    return (
        <section id="projects">
            <div className="section-header">
                <h2 className="section">Projects</h2>
            </div>
            {/* <hr /> */}
            <div className="projects">
                <ul className="projectList">
                    {Object.keys(ProjectContent).map((projectName) => (
                        <li
                            key={projectName}
                            className={`projectName${projectName === selectedProject ? " active" : ""}`} 
                            onClick={() => clickProject(projectName)}
                            onMouseEnter={() => hoverOn(projectName)}
                            onMouseLeave={() => hoverOff()}
                            style={{ cursor: "pointer" }}
                        >
                            {projectName}
                        </li>
                    ))}
                </ul>
                <div className="projectView">
                    <>
                        {visibleProject && ProjectContent[visibleProject]}
                        {(visibleProject && visibleProject === selectedProject) && <button className="close-button" onClick={() => closeProject()}>x</button>}
                    </>
                </div>
            </div>
        </section>
    );
};

export default Projects;
