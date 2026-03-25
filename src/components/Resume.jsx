import { Download } from 'lucide-react';
import './Resume.css';

const Resume = () => {
  const handleDownload = () => {
    const resumeContent = "Kuldeep Umaraiya - Resume\n\nAssistant Professor & UX Designer\n\nExperience:\n- Upstox (UX Designer)\n- Graphic Era (Assistant Professor)\n- IIT Roorkee (PhD Scholar)\n\nEducation:\n- IIT Bombay (B.Tech & M.Tech)";
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'Kuldeep_Umaraiya_Resume.txt';
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const skills = [
    "User Research", "Wireframing", "Prototyping", "Usability Testing",
    "Figma", "Interaction Design", "Cognitive Psychology",
    "Curriculum Development", "Design Thinking"
  ];

  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <div className="resume-grid">
          <div>
            <h2 className="section-title">Capabilities</h2>
          </div>

          <div className="resume-content">
            <ul className="skills-list">
              {skills.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
