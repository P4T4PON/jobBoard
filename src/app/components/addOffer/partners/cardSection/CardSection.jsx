import React from 'react';

const CardSection = ({ type, text }) => {
  return (
    <div className="cardSection">
      <div className="cardText">
        {type}
      </div>
      <div className="card-number">{text}</div>
    </div>
  );
};

export default CardSection;
