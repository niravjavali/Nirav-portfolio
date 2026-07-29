import "./About.css";
import profile from "../../assets/Nirav.jpeg";
function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={profile} alt="Nirav Javali" />
        </div>

        <div className="about-content">
          <h2>About Me</h2>

          <p>
            I am currently pursuing <strong>B.Tech in Artificial Intelligence
            and Machine Learning</strong> at MS Ramaiah University of Applied
            Sciences, Bengaluru.
          </p>

          <p>
            I enjoy learning new technologies and building responsive,
            user-friendly websites. I have a strong foundation in Python, C,
            HTML and CSS, and I am currently learning JavaScript and React.
          </p>

          <p>
            My goal is to become an <strong>AI Engineer</strong> and build
            innovative applications that solve real-world problems while
            continuously improving my software development skills.
          </p>

          <div className="about-info">
            <div className="info-card">
              <h3>🎓 Education</h3>
              <p>B.Tech AIML</p>
            </div>

            <div className="info-card">
              <h3>📍 Location</h3>
              <p>Hubli, Karnataka</p>
            </div>

            <div className="info-card">
              <h3>💻 Interests</h3>
              <p>AI • Web Development • ML</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;