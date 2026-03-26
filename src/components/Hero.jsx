import { ArrowUpRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <h1 className="hero-title">
          Designing human-centered experiences and shaping future designers.
        </h1>
        <p className="hero-description">
          Assistant Professor and UX Designer creating intuitive, research-driven digital experiences, with a focus on design education and AI.
        </p>

        <a
          href={import.meta.env.BASE_URL + 'Kuldeep_Umaraiya_Resume.pdf'}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-text-link"
        >
          <strong>Resume</strong> <ArrowUpRight size={18} strokeWidth={2.5} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
