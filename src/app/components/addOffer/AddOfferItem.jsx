import React from 'react';

const AddOfferItem = ({ img, textPl, textEng, pl }) => {
  return (
    <div className="item">
      <div className="more-logo">
        <img src={img} alt="" />
      </div>
      <div className="more-text">
        <p>{pl ? textPl : textEng}</p>
      </div>
    </div>
  );
};

export default AddOfferItem;
