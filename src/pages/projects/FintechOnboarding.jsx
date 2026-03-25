import ProjectLayout from '../../components/ProjectLayout';

const FintechOnboarding = () => {
  return (
    <ProjectLayout
      title="Fintech Onboarding Flow"
      role="UX Designer"
      timeline="2 Months"
    >
      <p>
        Streamlined the KYC process for new users at Upstox, drastically reducing the 
        drop-off rate during complex account creation steps.
      </p>
      
      {/* Example Image Placeholder */}
      <div 
        className="project-image-full" 
        style={{ height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <span>[Insert Before/After User Flow Diagram Here]</span>
      </div>
      <p className="project-image-caption">Fig 1. Monolithic form vs Conversational flow.</p>

      <h2>The Challenge & Solution</h2>
      <p>
        By breaking the monolithic form into a conversional flow and employing micro-feedback 
        for document uploads, we reduced perceived friction drastically. The "Aha" moment was 
        placing the ID verification as the final, frictionless step.
      </p>

      <h3>Results</h3>
      <ul>
        <li>25% reduction in onboarding drop-offs.</li>
        <li>Customer support queries related to KYC dropped by 40%.</li>
        <li>Time-to-finish decreased from 12 minutes to 4.5 minutes.</li>
      </ul>
    </ProjectLayout>
  );
};

export default FintechOnboarding;
