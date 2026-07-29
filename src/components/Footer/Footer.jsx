import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <h2 className="footer-logo">Nirav</h2>

        <p className="footer-text">
          &copy; {year} Nirav Javali. All Rights Reserved.
        </p>

        <div className="footer-links">
          <a
            href="https://github.com/niravjavali"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/nirav-javali-b194a640b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:yourmail@gmail.com">
            Email
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;