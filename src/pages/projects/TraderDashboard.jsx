import ProjectLayout from '../../components/ProjectLayout';

const TraderDashboard = () => {
  return (
    <ProjectLayout
      title="Trader Dashboard Redesign"
      role="Lead UX Designer"
      timeline="6 Months"
    >
      <p>
        A complete overhaul of the trading analytics dashboard at Upstox. The goal was to simplify 
        complex data streams for novice traders while retaining powerful features for experts.
      </p>

      {/* Example of how to add a full-width image placeholder */}
      <div 
        className="project-image-full" 
        style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <span>[Insert Final Dashboard Image Here]</span>
      </div>
      <p className="project-image-caption">Fig 1. The finalized dark-mode dashboard interface.</p>

      <h2>Process & Findings</h2>
      <p>
        We conducted extensive qualitative user research, observing over 50 power users trade in live markets. 
        We discovered that cognitive load was extremely high due to scattered information. 
      </p>

      <h3>Solution</h3>
      <ul>
        <li>Contextual grouping of related financial indicators.</li>
        <li>Customizable widget layout for advanced traders.</li>
        <li>Progressive disclosure patterns to hide complex configurations until needed.</li>
      </ul>

      {/* Example of another image */}
      <div 
        className="project-image-full" 
        style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <span>[Insert Wireframes Image Here]</span>
      </div>
      <p className="project-image-caption">Fig 2. Iterative wireframing process.</p>

    </ProjectLayout>
  );
};

export default TraderDashboard;
