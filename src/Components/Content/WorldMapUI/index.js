import React from 'react';
import './WorldMapUI.css'; // CSS for styles


const WorldMapUI = () => {
  return (
    <div className="world-map-section">
      {/* Stats section */}
      <div className="stats">
        <div className="stat-item">
          <h2>20</h2>
          <p><span className="blue-dot"></span> Production plants</p>
        </div>
        <div className="stat-item">
          <h2>25</h2>
          <p><span className="green-dot"></span> Sales offices</p>
        </div>
        <div className="stat-item">
          <h2>16</h2>
          <p><span className="orange-dot"></span> Customer Innovation Centers</p>
        </div>
        <div className="stat-item">
          <h2>10</h2>
          <p><span className="brown-dot"></span> Sourcing operations</p>
        </div>
        <div className="stat-item">
          <h2>4,100</h2>
          <p>Employees, strategically positioned</p>
        </div>
      </div>

      {/* World map section */}
      <div className="map-container">
        <img src="/map.svg" alt="World Map" className="world-map" />
      </div>
    </div>
  );
};

export default WorldMapUI;
