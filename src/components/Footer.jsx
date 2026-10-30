
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">
          <Link to="/" className="logo">
            STUDIO<span>.</span>
          </Link>

          <p>
            Turning bold ideas into meaningful
            digital experiences.
          </p>
        </div>

        <div className="footer-links">
          <h4>EXPLORE</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <h4>LET'S CONNECT</h4>
          <a href="mailto:hello@creativestudio.com">
            hello@creativestudio.com
          </a>
          <p>West Bengal, India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} STUDIO. All rights reserved.</p>
        <p>DESIGNED WITH CREATIVITY ✳</p>
      </div>

    </footer>
  );
};

export default Footer;
