import { Link } from 'react-router-dom';
import { projectsList } from '../data/projectsList';
import './Projects.css';

const Projects = () => {
  // Group projects logically based on their group property
  const groupedProjects = projectsList.reduce((acc, project) => {
    if (!acc[project.group]) {
      acc[project.group] = [];
    }
    acc[project.group].push(project);
    return acc;
  }, {});

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {Object.entries(groupedProjects).map(([groupName, projects]) => (
          <div key={groupName} className="project-group">
            <div className="project-group-header">
              <h3>{groupName}</h3>
            </div>
            
            <div className="projects-grid">
              {projects.map((project) => (
                <Link to={`/project/${project.id}`} key={project.id} className="project-card">
                  <div className="project-image-wrapper">
                    <img 
                      src={`${import.meta.env.BASE_URL}${project.image}`} 
                      alt={project.title} 
                      className="project-image" 
                    />
                  </div>
                  <div className="project-info">
                    <div className="project-title-row">
                      <h4 className="project-title">{project.title}</h4>
                    </div>
                    <span className="project-description">{project.description}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
