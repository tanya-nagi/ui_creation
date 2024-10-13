import React from 'react';
import './AAKGlobalSection.css';

const AAKGlobalSection = () => {
  return (
    <div className="global-section">
      {/* Left column */}
      <div className="left-column">
        <h1>AAK Global</h1>
        <p className="subtitle">Making Better Happen™ worldwide</p>
      </div>

      {/* Right column */}
      <div className="right-column">
        <p>
          For more than a century and a half, AAK has been pioneering advancements in plant-based solutions, setting new industry standards, and enriching the lives of consumers globally.
        </p>
        <p>
          It’s perhaps a legacy that comes to fruition every single day, resting on a commitment to Making Better Happen™, and driving every aspect of our business.
        </p>
        <p className="highlight">
          Global reach, local expertise!
        </p>
        <button className="cta-button">AAK Global &gt;</button>
      </div>
    </div>
  );
};

export default AAKGlobalSection;
