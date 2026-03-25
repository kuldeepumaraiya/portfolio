import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Assistant Professor',
      company: 'Graphic Era',
      duration: 'Present',
    },
    {
      id: 2,
      role: 'PhD Scholar',
      company: 'IIT Roorkee',
      duration: 'Present',
    },
    {
      id: 3,
      role: 'UX Designer',
      company: 'Upstox',
      duration: 'Past',
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="exp-grid">
          <div>
            <h2 className="section-title">Experience</h2>
          </div>
          
          <div className="exp-list">
            {experiences.map((exp) => (
              <div key={exp.id} className="exp-item">
                <div className="exp-logo-placeholder">
                  {/* Space for the institution's logo */}
                  <span>{exp.company.charAt(0)}</span>
                </div>
                <div className="exp-details">
                  <h3 className="exp-role">{exp.role}</h3>
                  <div className="exp-company-row">
                    <span className="exp-company">{exp.company}</span>
                    <span className="exp-duration">{exp.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
