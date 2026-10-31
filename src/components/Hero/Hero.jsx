import "./Hero.css";

function Hero() {
  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">

        <p className="greeting">
          {getGreeting()}
          <span className="greeting-comma">,</span>
          <span className="greeting-wave"> 👋</span>
        </p>

        <h1>
          <span className="hero-hi">Hi, </span>I'm <span>Nirav Javali</span>
          <span className="hero-wave">👋</span>
        </h1>

        <h2>Artificial Intelligence & Machine Learning Student</h2>

        <p className="hero-description">
          Passionate about AI, Web Development and Software Engineering.
          I enjoy building responsive websites and solving real-world
          problems through technology.
        </p>

        <p className="location">
          📍 Hubli, Karnataka, India
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>

          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;
