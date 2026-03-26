import './Ticker.css';

const Ticker = () => {
  const items = [
    'Interaction Design',
    'Cognitive HCI',
    'User Experience Research',
    'Rapid Prototyping',
    'Usability Testing',
    'Information Architecture',
    'Design Strategy',
    'Data Analysis',
    'Instructional Design'
  ];

  // We duplicate the items array so the animation loops seamlessly.
  const duplicatedItems = [...items, ...items];

  return (
    <div className="ticker-wrapper">
      <div className="ticker-scroll">
        {duplicatedItems.map((item, index) => (
          <span key={index} className="ticker-item">
            {item}
            <span className="ticker-bullet">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
