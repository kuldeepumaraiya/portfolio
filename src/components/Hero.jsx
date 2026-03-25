import { Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <h1 className="hero-title">
          Designing systems for humans.
          Researching the cognitive load of interfaces.
        </h1>
        <p className="hero-description">
          Assistant Professor & UX Designer.<br />
          Previously designing at Upstox.
        </p>

        <a
          href="/Kuldeep_Umaraiya_Resume.pdf"
          download="Kuldeep_Umaraiya_Resume.pdf"
          className="hero-cta-btn"
          style={{ textDecoration: 'none' }}
        >
          <Download size={18} strokeWidth={2.5} /> Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
