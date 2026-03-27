import ProjectLayout from '../../components/ProjectLayout';
import ProjectImage from '../../components/ProjectImage';

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
      
      {/* 📸 HOW TO ADD A SINGLE IMAGE */}
      <ProjectImage 
        src="images/projects/elearning-platform.png" 
        caption="Fig 1. High-contrast interface structure." 
      />

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
