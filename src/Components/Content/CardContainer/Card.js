import React from 'react';
import './Card.css';

const Card = ({ title, description }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className='title'>
        <h2>{title}</h2>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
