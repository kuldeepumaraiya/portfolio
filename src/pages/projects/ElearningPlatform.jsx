import ProjectLayout from '../../components/ProjectLayout';

const ElearningPlatform = () => {
  return (
    <ProjectLayout
      title="Accessible e-Learning Platform"
      role="Product Designer"
      timeline="4 Months"
    >
      <p>
        M.Tech final project at IIT Bombay. Designed and developed an accessible 
        learning platform specifically optimized for visually impaired students.
      </p>
      
      {/* Example Image Placeholder */}
      <div 
        className="project-image-full" 
        style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <span>[Insert Final Prototype Image Here]</span>
      </div>
      <p className="project-image-caption">Fig 1. High-contrast interface structure.</p>

      <h2>Process</h2>
      <p>
        Adhering deeply to WCAG guidelines, we architected a flow that was entirely 
        screen-reader optimized. We found that auditory structural anchors provided significant 
        mental model improvements over standard ARIA landmarking.
      </p>

      <h3>Outcomes</h3>
      <ul>
        <li>100% compliance with WCAG 2.1 AA standards.</li>
        <li>Successfully piloted with 45 students demonstrating a 60% task completion speed increase.</li>
      </ul>
    </ProjectLayout>
  );
};

export default ElearningPlatform;
