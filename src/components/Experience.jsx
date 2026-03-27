import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Assistant Professor',
      company: 'Graphic Era, Dehradun',
      duration: '2025-Present',
      logoUrl: 'https://www.geuieee.com/images/geu_logo.png',
      description: `
• Part of the founding team of the Design School, contributing to its strategic setup and growth 
• Coordinator of the UX Design program, managing academic and departmental activities
• Developed curriculum for undergraduate and postgraduate programs
• Established the Interaction Design Lab to support hands-on learning and research
• Actively involved in student mentoring and academic guidance
• Served as Anti-Ragging Coordinator, handling institutional responsibilities
  `,
    },
    {
      id: 2,
      role: 'Assistant Professor',
      company: 'MIT WPU, Pune',
      duration: '2024-2025',
      logoUrl: 'https://mitwpu.edu.in/uploads/notificationfile/logo.webp',
      description: `
• Part of the founding team of the Design School, contributing to its strategic setup and growth 
• Coordinator of the UX Design program, managing academic and departmental activities
• Developed curriculum for undergraduate and postgraduate programs
• Established the Interaction Design Lab to support hands-on learning and research
• Actively involved in student mentoring and academic guidance
• Served as Anti-Ragging Coordinator, handling institutional responsibilities
  `,
    },
    {
      id: 3,
      role: 'UX Designer',
      company: 'Upstox, Bengaluru',
      duration: '2023-2024',
      logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi8hnj33Ch_HR092ORTi7GT7MloB1aBiZG3Q&s',
      description: 'Briefly describe your key responsibilities, achievements, and impact in this role.',
    }
  ];

  const [openExpId, setOpenExpId] = useState(experiences[0].id);

  const toggleDrawer = (id) => {
    setOpenExpId(openExpId === id ? null : id);
  };

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
                  <div
                    className="exp-header-clickable"
                    onClick={() => toggleDrawer(exp.id)}
                  >
                    <div className="exp-role-row">
                      <h3 className="exp-role">{exp.role}</h3>
                      <ChevronDown
                        size={18}
                        className={`exp-chevron ${openExpId === exp.id ? 'open' : ''}`}
                      />
                    </div>
                    <div className="exp-company-row">
                      <span className="exp-company">{exp.company}</span>
                      <span className="exp-duration">{exp.duration}</span>
                    </div>
                  </div>

                  {exp.description && (
                    <div className={`exp-description-drawer ${openExpId === exp.id ? 'open' : ''}`}>
                      <div className="exp-drawer-inner">
                        {exp.description.includes('•') || exp.description.includes('\n') ? (
                          <ul className="exp-description-list">
                            {exp.description
                              .split('\n')
                              .map((line) => line.replace(/<br\s*\/?>/g, '').trim())
                              .filter((line) => line.length > 0)
                              .map((line, index) => {
                                const cleanLine = line.startsWith('•') ? line.substring(1).trim() : line;
                                return <li key={index}>{cleanLine}</li>;
                              })}
                          </ul>
                        ) : (
                          <p className="exp-description">{exp.description}</p>
                        )}
                      </div>
                    </div>
                  )}
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
