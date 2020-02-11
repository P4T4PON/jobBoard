import React from 'react';

const AddOfferSlide = ({ className, title, subTitle, text, img }) => {
  return (
    <div className={`slide ${className}`}>
      <div className="slide-title">{title}</div>
      <div className="slide-sub_title">{subTitle}</div>
      <div className="slide-text">{text}</div>
      <img src={img} alt=""></img>
    </div>
  );
};

export default AddOfferSlide;
