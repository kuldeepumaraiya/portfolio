import { Globe, Terminal, Mail, Link, ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#" className="logo">Kuldeep Umaraiya</a>
            <p className="footer-description">
              Assistant Professor at Graphic Era University, Dehradun <br />
              kuldeepumaraiya@gmail.com
            </p>
          </div>

          {/*<div className="footer-links">
            <a href="mailto:contact@example.com" className="nav-link">Email</a>
            <a href="#" className="nav-link">LinkedIn</a>
            <a href="#" className="nav-link">Twitter</a>
          </div>*/}
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Kuldeep Umaraiya. All rights reserved.</p>
          <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
            Top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
