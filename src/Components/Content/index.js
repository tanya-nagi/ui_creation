import React from 'react';
import './ContentSection.css'; // Import CSS for styles
import ContentSplitSection from './ContentSplitSection';
import CardContainer from './CardContainer';
import AAKGlobalSection from './AAKGlobalSection';
import WorldMapUI from './WorldMapUI';
import TracingEvolution from './TracingEvolution';

const ContentSection = () => {
  return <>
    <div className="content-section">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <a href="#">Home</a> &gt; <a href="#">About us</a>
      </div>

      {/* Main heading and subtitle */}
      <div className="main-content">
        <h1>
          Celebrating a <span className="highlight">150-year-old</span> odyssey
        </h1>
        <p className="subtitle">
          Pioneering a trail of product innovation, process excellence & business impact
        </p>
      </div>

      {/* Image section */}
      <div className="image-container">
        <img src="path_to_your_image.png" alt="People working in office" />
      </div>
    </div>
    <ContentSplitSection/>
    <CardContainer/>
    <AAKGlobalSection/>
    <WorldMapUI/>
    <TracingEvolution/>
    </>
};

export default ContentSection;
