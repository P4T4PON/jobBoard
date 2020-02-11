import React from 'react';

const CardSection = ({ type, pl, text }) => {
  return (
    <div className="card-section">
      <div className="card-text">
        {pl && type === 'c1'
          ? 'Skontaktuj się z nami pod numerem:'
          : type === 'c1'
          ? 'Contact us at:'
          : null}
        {pl && type === 'c2'
          ? 'lub napisz do nas:'
          : type === 'c2'
          ? 'Or write to us:'
          : null}
      </div>
      <div className="card-number">{text}</div>
    </div>
  );
};

export default CardSection;
