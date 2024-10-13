import React from 'react';
import Card from './Card';
import './CardContainer.css';

const CardContainer = () => {
  const cardsData = [
    {
      title: 'Your trusted Co-Development partner',
      description:
        'Enhancing the taste, health, and economics of consumer-facing products, through continuous learning, innovative technical solutions, and customer-centricity.',
    },
    {
      title: 'Year 2030',
      description:
        'Doubling our value creation per kilo, accelerating growth in specialized markets, and enhancing the positive impact on stakeholders.',
    },
    {
      title: 'Portfolio strategy',
      description:
        'A rather balanced approach towards managing risks and maximizing opportunities across various market segments.',
    },
  ];

  return (
    <div className="card-container">
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default CardContainer;
