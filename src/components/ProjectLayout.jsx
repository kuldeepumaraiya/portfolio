import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './ProjectLayout.css';

const ProjectLayout = ({ title, role, timeline, children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="project-detail">
      <div className="container project-container">
        <Link to="/" className="back-link">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <h1 className="project-detail-title">{title}</h1>
        
        {(role || timeline) && (
          <div className="project-meta">
            {role && <span><strong>Role:</strong> {role}</span>}
            {timeline && <span><strong>Timeline:</strong> {timeline}</span>}
          </div>
        )}
        
        <div className="project-content">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ProjectLayout;
