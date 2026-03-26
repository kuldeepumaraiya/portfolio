import './Tools.css';

const Tools = () => {
  const toolCategories = [
    {
      id: 1,
      category: 'Design & UI',
      tools: ['Figma', 'Sketch', 'Adobe CC Suite'],
    },
    {
      id: 2,
      category: 'Prototyping & Motion',
      tools: ['Framer', 'Protopie', 'Principle', 'InVision'],
    },
    {
      id: 3,
      category: 'Research & Testing',
      tools: ['Dovetail', 'Maze', 'UserTesting', 'Qualtrics', 'Miro'],
    },
    {
      id: 4,
      category: 'Development (AI-Assisted)',
      tools: ['HTML & CSS', 'JavaScript', 'React', 'Python (Basics)'],
    }
  ];

  return (
    <section id="tools" className="tools-section">
      <div className="container">
        <div className="tools-grid">
          <div>
            <h2 className="section-title">Tools</h2>
          </div>

          <div className="tools-list">
            {toolCategories.map((categoryGroup) => (
              <div key={categoryGroup.id} className="tools-category">
                <h3 className="tools-category-name">{categoryGroup.category}</h3>
                <div className="tools-tags">
                  {categoryGroup.tools.map((tool, index) => (
                    <span key={index} className="tool-tag">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
