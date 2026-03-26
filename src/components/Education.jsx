import './Education.css';

const Education = () => {
  const educationList = [
    {
      id: 1,
      degree: 'Ph.D. in Design',
      institution: 'IIT Roorkee',
      year: 'Present',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/en/2/2d/Indian_Institute_of_Technology_Roorkee_Logo.svg', // Add image path here, e.g., '/iit-roorkee-logo.png'
    },
    {
      id: 2,
      degree: 'M.Des. in Interaction Design',
      institution: 'IIT Bombay',
      year: '2022',
      logoUrl: 'https://bharatinnovates.in/wp-content/uploads/2025/08/cropped-igis_icon_nobg-1.png',
    },
    {
      id: 3,
      degree: 'B.Des. in Interaction Design',
      institution: 'IIT Bombay',
      year: '2021',
      logoUrl: 'https://bharatinnovates.in/wp-content/uploads/2025/08/cropped-igis_icon_nobg-1.png',
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="edu-grid">
          <div>
            <h2 className="section-title">Education</h2>
          </div>

          <div className="edu-list">
            {educationList.map((edu) => (
              <div key={edu.id} className="edu-item">
                <div className="edu-logo-placeholder">
                  {edu.logoUrl ? (
                    <img src={edu.logoUrl} alt={`${edu.institution} logo`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  ) : (
                    <span>{edu.institution.charAt(0)}</span>
                  )}
                </div>
                <div className="edu-details">
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <div className="edu-institution-row">
                    <span className="edu-institution">{edu.institution}</span>
                    <span className="edu-year">{edu.year}</span>
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

export default Education;
