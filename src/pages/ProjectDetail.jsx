import { useParams, useNavigate, Link } from "react-router-dom";
import Window from "../components/Window";
import { projects } from "../data/project";
import backIcon from "../assets/backLM.png";

function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <Window title="Project Not Found">
        <div className="work-content">
          <p>Sorry, this project doesn’t exist.</p>
        </div>
      </Window>
    );
  }

  return (
    <Window title={project.name}>
      <div className="work-content project-detail">
        <div className="project-detail-layout">
          {/* Left sticky column with back button */}
          <div className="sticky-side">
            <button className="back-btn" onClick={() => navigate("/work")}>
              <img src={backIcon} alt="Go Back" className="back-btn-img" />
            </button>
          </div>

          {/* Right scrollable content */}
          <div className="project-main">
            {/* Tag and Title */}
            <span className="project-tag">{project.tag || "Web Development"}</span>
            <h2 className="project-title">{project.name}</h2>

            {/* Short Description */}
            <p className="project-detail-description">{project.description}</p>

            {/* Technologies section */}
            <h3>Technologies Used</h3>
            <div className="tools-grid">
              {project.technologies.map((tech, index) => (
                <div key={index} className="tool-box">
                  {tech}
                </div>
              ))}
            </div>

            <hr className="work-hr" />

            {/* Creative Process Section */}
            {project.process && project.process.length > 0 && (
              <div className="creative-process">
                <h3>Creative Process</h3>

                {project.process.map((step, index) => (
                  <div key={index} className="process-step">
                    {step.image && (
                      <img src={step.image} alt={`Step ${index + 1}`} />
                    )}
                    {step.caption && <p>{step.caption}</p>}
                  </div>
                ))}
              </div>
            )}

            {/* Suggested Projects Section */}
            <h3>You Might Also Like</h3>
            <div className="suggested-projects">
              {projects
                .filter((p) => p.id !== project.id)
                .slice(0, 2)
                .map((p) => (
                  <Link
                    key={p.id}
                    to={`/work/${p.id}`}
                    className="suggested-project-card"
                  >
                    {p.image && (
                      <img
                        src={p.image}
                        alt={p.name}
                        className="suggested-project-img"
                      />
                    )}
                    <p className="suggested-project-name">{p.name}</p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
}

export default ProjectDetail;
