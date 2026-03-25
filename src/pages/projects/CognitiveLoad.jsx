import ProjectLayout from '../../components/ProjectLayout';

const CognitiveLoad = () => {
  return (
    <ProjectLayout
      title="Cognitive Load in Interfaces"
      role="PhD Researcher"
      timeline="Ongoing"
    >
      <p>
        An academic exploration of how structural density and typography scale 
        influence the cognitive load of users digesting financial data.
      </p>
      
      {/* Example Image Placeholder */}
      <div 
        className="project-image-full" 
        style={{ height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <span>[Insert Eye-Tracking Heatmap Image Here]</span>
      </div>
      <p className="project-image-caption">Fig 1. Eye-tracking heatmap on a high-density dashboard.</p>

      <h2>Methodology</h2>
      <p>
        Using robust eye-tracking hardware and biometric sensors, we plotted the exact 
        sequences of visual fixation across 30 participants interacting with 5 different UI densities.
      </p>

      <h3>Key Findings</h3>
      <ul>
        <li>Users process information 40% slower when white-space drops below a 12% threshold.</li>
        <li>Sans-serif tabular numbers reduce misread errors significantly in high-stress trading environments.</li>
      </ul>
    </ProjectLayout>
  );
};

export default CognitiveLoad;
