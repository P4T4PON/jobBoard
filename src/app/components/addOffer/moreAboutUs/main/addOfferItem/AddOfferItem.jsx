import React from 'react';

const AddOfferItem = ({ img, text }) => {
  return (
    <div className="item">
      <div className="moreLoogo">
        <img src={img} alt="" />
      </div>
      <div className="moreText">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default AddOfferItem;
