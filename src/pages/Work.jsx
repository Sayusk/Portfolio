import Window from "../components/Window";

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

  const projects = [
    {
      name: "Portfolio Website",
      description: "Portfolio website built with React & Vite.",
      link: "/work/project1",
    },
    {
      name: "Project2",
      description: "",
      link: "/work/project2",
    },
    {
      name: "Project3",
      description: "",
      link: "/work/project3",
    },
    {
      name: "Project4",
      description: "",
      link: "/work/project4",
    },
    // add more projects here later
  ];

  return (
    <Window title="Work">
      <div className="work-content">
        {/* Tools Section */}
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

        {/* Projects Section */}
        <div className="projects-section">
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                className="project-card"
              >
                <p className="project-name">{project.name}</p>
                <div className="project-overlay">
                  <p>{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Window>
  );
}

export default Work;
