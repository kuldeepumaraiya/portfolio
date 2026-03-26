import { Link } from 'react-router-dom';
import { projectsList } from '../data/projectsList';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-list">
          {projectsList.map((project) => (
            <Link to={`/project/${project.id}`} key={project.id} className="project-list-item">
              <h3 className="project-title">{project.title}</h3>
              <span className="project-category">{project.category}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
