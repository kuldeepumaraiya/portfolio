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
          href={import.meta.env.BASE_URL + 'Kuldeep_Umaraiya_Resume.pdf'}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta-btn"
          style={{ textDecoration: 'none' }}
        >
          Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
