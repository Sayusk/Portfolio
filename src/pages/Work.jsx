import { Link } from "react-router-dom";
import Window from "../components/Window";
import { projects } from "../data/project";

function Work() {
  const tools = [
    "Power BI",
    "CorelDraw",
    "Adobe Suite",
    "Figma",
    "Git",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "C",
    "C#",
    "Java",
    "Python",
  ];

  return (
    <Window title="Work">
      <div className="work-content">

        <div className="tools-section">
          <h2>Tools & Technologies</h2>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <div key={index} className="tool-box">
                {tool}
              </div>
            ))}
          </div>
        </div>

        <hr className="work-hr" />

        <div className="projects-section">
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/work/${project.id}`}
                className={`project-card ${!project.image ? "no-image" : ""}`}
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="project-card-img"
                  />
                )}

                <div className="project-overlay">
                  <p>{project.description}</p>
                </div>

                <p className="project-name">{project.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Window>
  );
}

export default Work;
