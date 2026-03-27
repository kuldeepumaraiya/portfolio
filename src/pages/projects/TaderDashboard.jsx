import ProjectLayout from '../../components/ProjectLayout';
import ProjectImage from '../../components/ProjectImage';

const TraderDashboard = () => {
  return (
    <ProjectLayout
      title="Trader Dashboard Redesign"
      role="Lead UX Designer"
      timeline="6 Months"
    >
      <p>
        Complete overhaul of the trading analytics dashboard at Upstox. The goal was to simplify
        complex data streams for novice traders while retaining powerful features for experts.
      </p>

      {/* 📸 HOW TO ADD A SINGLE IMAGE */}
      <ProjectImage 
        src="images/projects/tader-dashboard.png" 
        caption="Fig 1. The finalized dark-mode dashboard interface." 
      />

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

      {/* 📸 ANOTHER SINGLE IMAGE */}
      <ProjectImage 
        src="images/projects/fintech-onboarding.png" 
        caption="Fig 2. Iterative wireframing process." 
      />

    </ProjectLayout>
  );
};

export default TraderDashboard;
