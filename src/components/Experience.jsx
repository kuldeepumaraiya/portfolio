import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Assistant Professor',
      company: 'Graphic Era',
      duration: '2025-Present',
      logoUrl: 'https://www.geuieee.com/images/geu_logo.png', // Add image path here, e.g., '/graphic-era-logo.png' 
    },
    {
      id: 2,
      role: 'Assistant Professor',
      company: 'MIT World Peace University',
      duration: '2024-2025',
      logoUrl: 'https://mitwpu.edu.in/uploads/notificationfile/logo.webp',
    },
    {
      id: 3,
      role: 'UX Designer',
      company: 'Upstox',
      duration: '2023-2024',
      logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi8hnj33Ch_HR092ORTi7GT7MloB1aBiZG3Q&s',
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
                  {exp.logoUrl ? (
                    <img src={exp.logoUrl} alt={`${exp.company} logo`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  ) : (
                    <span>{exp.company.charAt(0)}</span>
                  )}
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
