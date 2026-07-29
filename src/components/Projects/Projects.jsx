import "./Projects.css";

import portfolioImg from "../../assets/portfolio.jpg";
import registrationImg from "../../assets/registrationform.jpg";
import roomLightImg from "../../assets/roomlight.jpeg";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description:
        "A responsive personal portfolio website showcasing my skills, projects, education and contact information.",
      image: portfolioImg,
      technologies: ["HTML", "CSS", "React"],
      github: "#",
      live: "#",
    },
    {
      id: 2,
      title: "Student Registration Form",
      description:
        "A responsive registration form that allows users to enter academic and personal information.",
      image: registrationImg,
      technologies: ["HTML", "CSS"],
      github: "#",
      live: "#",
    },
    {
      id: 3,
      title: "Automatic Room Light Control",
      description:
        "An Arduino-based project that automatically controls room lighting based on environmental conditions.",
      image: roomLightImg,
      technologies: ["Arduino", "Embedded Systems"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2>My Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <img src={project.image} alt={project.title} />

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>

                <div className="project-buttons">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;