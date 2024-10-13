import React from 'react';
import './ContentSplitSection.css'; // Updated CSS

const ContentSplitSection = () => {
  return (
    <div className="split-section">
      <div className="left-column">
        <h1>
          Bringing <span className="highlight">product innovation</span> <br />
          as a multi-oil, plant-based <br /> ingredient house
        </h1>
        <p className="subtitle">Harnessing global strengths</p>
      </div>
      <div className="right-column">
        <p>
          AAK India, South Asia, and Sub-Saharan Africa is constantly striving to set new standards in taste, nutrition, and economic viability of products, that people love to consume.
        </p>
        <p>
          Our strategy is one of relentless adaptation; constantly refining our approach to seize new opportunities in product management, customer co-development, and supply chain optimization.
        </p>
      </div>
    </div>
  );
};

export default ContentSplitSection;
