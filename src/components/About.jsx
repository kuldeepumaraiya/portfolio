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
              I am an Assistant Professor and UX Designer with a strong focus on creating intuitive, research-driven digital experiences. My work lies at the intersection of interaction design, user research, and design education.
            </p>
            <p>
              With a background from IIT Bombay and experience in both academic and practical design environments, I aim to bridge the gap between theory and real-world application. I actively engage in teaching, curriculum development, and mentoring students to become thoughtful, user-centered designers.
            </p>
            <p>
              My interests include interaction design, emerging technologies, and the evolving role of UX in an AI-driven world. I am particularly inclined towards exploring how design thinking can shape learning experiences and foster problem-solving from an early stage.
            </p>
            <p>
              I believe good design is not just about usability, but about creating meaningful and impactful human experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
