import Project from "../../components/Project/Project";
import { myProjects } from "../../consts/projects";
import "./Projects.scss";

const Projects = () => {
  return (
    <div className="work">
      <div className="work-header">
        <span className="curly">{"{"}</span>
        <span>
          <h2>My Works</h2>
        </span>
        <span className="curly">{"}"}</span>
      </div>
      <div className="projects">
        {myProjects.map((project, index) => (
          <Project
            image={project.image}
            title={project.title}
            subtitle={project.subtitle}
            url={project.link}
            reverse={index % 2 === 1 ? "reverse" : undefined}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
