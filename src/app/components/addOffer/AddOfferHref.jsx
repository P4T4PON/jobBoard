import React from 'react';

const AddOfferHref = ({ link, text, iconClass }) => {
  return (
    <a href={link} target="blank" rel="noopener noreferrer">
      {text} {iconClass ? <i className={iconClass}></i> : null}
    </a>
  );
};

export default AddOfferHref;
