import "./Skills.css";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "C Programming",
    "Git",
    "GitHub",
    "Artificial Intelligence",
    "Machine Learning",
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2>My Skills</h2>

        <p className="skills-subtitle">
          Here are some technologies and tools I use to build modern,
          responsive, and efficient applications.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;