import { useParams, useNavigate } from "react-router-dom";
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

      <div className="work-content">
        
        <button className="back-btn" onClick={() => navigate("/work")}>
          <img
            src={backIcon}
            alt="Go Back"
            style={{ width: "30px", height: "30px" }}
          />
        </button>

   
        <p className="project-detail-description">{project.description}</p>

        
        <h3>Technologies Used</h3>
        <ul>
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </Window>
  );
}

export default ProjectDetail;
