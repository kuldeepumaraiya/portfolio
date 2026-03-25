import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div>
            <h2 className="section-title">About Me</h2>
          </div>
          <div className="about-text">
            <p>
              My journey began with a deep curiosity about how humans interact with technology. 
              I translated that curiosity into practice as a UX Designer at <strong>Upstox</strong>, 
              crafting experiences for millions of users.
            </p>
            <p>
              Today, I merge industry practice with theoretical research. As an Assistant Professor 
              and design researcher, my goal is to teach the next generation of designers 
              while continuing to push the boundaries of Human-Computer Interaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
