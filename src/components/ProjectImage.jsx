import './ProjectImage.css';

// Automatically injects the GitHub Pages '/portfolio/' base URL for public folder images
const resolveSrc = (src) => {
  if (!src) return '';
  // If the file was manually imported via JS or is an external web link, leave it alone
  if (src.startsWith('data:') || src.startsWith('http') || src.includes('assets/')) {
    return src;
  }
  // Otherwise, if it's a public folder string, automatically attach the Vite base URL!
  const cleanSrc = src.startsWith('/') ? src.substring(1) : src;
  return `${import.meta.env.BASE_URL}${cleanSrc}`;
};

const ProjectImage = ({ src, caption, alt, grid }) => {
  // Render a multi-image grid gallery if an array is passed
  if (grid && grid.length > 0) {
    return (
      <div className="project-image-grid-container">
        <div className="project-image-grid">
          {grid.map((item, index) => (
            <div key={index} className="project-grid-item">
              <img 
                src={resolveSrc(item.src)} 
                alt={item.caption || alt || `Project Image ${index + 1}`} 
                className="project-image-styled" 
              />
              {item.caption && <p className="project-image-caption-grid">{item.caption}</p>}
            </div>
          ))}
        </div>
        {/* Optional global caption for the entire grid */}
        {caption && <p className="project-image-caption global-caption">{caption}</p>}
      </div>
    );
  }

  // Render a single image
  return (
    <div className="project-single-image">
      <img 
        src={resolveSrc(src)} 
        alt={caption || alt || 'Project Image'} 
        className="project-image-styled" 
      />
      {caption && <p className="project-image-caption">{caption}</p>}
    </div>
  );
};

export default ProjectImage;
