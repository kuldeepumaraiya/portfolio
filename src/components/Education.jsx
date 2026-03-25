import './Education.css';

const Education = () => {
  const educationList = [
    {
      id: 1,
      degree: 'Ph.D. Scholar (Cognitive HCI)',
      institution: 'IIT Roorkee',
      year: 'Present',
    },
    {
      id: 2,
      degree: 'M.Tech in Interaction Design',
      institution: 'IIT Bombay',
      year: '2020',
    },
    {
      id: 3,
      degree: 'B.Tech in Computer Science',
      institution: 'IIT Bombay',
      year: '2018',
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
                  {/* Space for the institution's logo */}
                  <span>{edu.institution.charAt(0)}</span>
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
