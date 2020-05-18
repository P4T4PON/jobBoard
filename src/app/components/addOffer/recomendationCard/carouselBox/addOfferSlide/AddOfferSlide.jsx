import React from 'react';

const AddOfferSlide = ({ title, subTitle, text, img }) => {
  return (
    <div className={`slide correct ${title === 'Jakub Przyborowski' && 'owl'}`}>
      <div className="slideTitle">{title}</div>
      <div className="slideSubTitle">{subTitle}</div>
      <div className="slideText">{text}</div>
      <img src={img} alt=""></img>
    </div>
  );
};

export default AddOfferSlide;
