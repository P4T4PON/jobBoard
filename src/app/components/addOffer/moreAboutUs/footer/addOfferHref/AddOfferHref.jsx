import React from 'react';

const AddOfferHref = ({ link, text }) => {
  return (
    <a href={link} target="blank" rel="noopener noreferrer">
      {text} {text === 'Policy' || text === 'Terms' ? <i className={'far fa-file-pdf'} /> : null}
    </a>
  );
};

export default AddOfferHref;
