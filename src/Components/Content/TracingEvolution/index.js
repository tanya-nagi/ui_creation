import React from 'react';
import './TracingEvolution.css'; // Import the CSS for styling

const TracingEvolution = () => {
  return (
    <div className="tracing-evolution-section">
      {/* Left section */}
      <div className="left-column">
        <h1>Tracing the <span className="highlight">evolution</span></h1>
        <p className="subtitle">A heritage of enduring innovation, excellence, and expertise</p>
      </div>

      {/* Right section */}
      <div className="right-column">
        <p className="description">
          The story of AAK is one of enduring innovation and unparalleled expertise.
        </p>
        <div className="milestones">
          <h3>AAK Global; Key milestones</h3>
          <div className="milestone">
            <span className="year">1871</span>
            <span className="separator">-</span>
            <span className="event">Plant established in Aarhus, Denmark</span>
          </div>
          <div className="milestone">
            <span className="year">1918</span>
            <span className="separator">-</span>
            <span className="event">Plant establishment in Karlshamn, Sweden</span>
          </div>
          <div className="milestone">
            <span className="year">1965</span>
            <span className="separator">-</span>
            <span className="event">Margarine and ice cream plant in Karlshamn, R&D lab set up</span>
          </div>
          <div className="milestone">
            <span className="year">1986</span>
            <span className="separator">-</span>
            <span className="event">First shea products for cosmetics</span>
          </div>
          <div className="milestone">
            <span className="year">2009</span>
            <span className="separator">-</span>
            <span className="event">Start of Kolo Nafaso women's program</span>
          </div>
          <div className="milestone">
            <span className="year">2020</span>
            <span className="separator">-</span>
            <span className="event">Joined the MISTA innovation platform, setting science-based targets</span>
          </div>
          <div className="milestone">
            <span className="year">2021</span>
            <span className="separator">-</span>
            <span className="event">Implementation of satellite monitoring to support zero deforestation</span>
          </div>
          <div className="milestone">
            <span className="year">2023</span>
            <span className="separator">-</span>
            <span className="event">CO₂ reduction biomass boiler investment in Aarhus</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TracingEvolution;
