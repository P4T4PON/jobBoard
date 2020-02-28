import React from 'react';
import { AddOfferHrefs } from '../../../../../constans';
import AddOfferHref from '../../AddOfferHref';

const Footer = () => {
  const toggleHref = () => {
    return AddOfferHrefs.map((href, index) => (
      <AddOfferHref
        key={index}
        link={href[0]}
        text={href[1]}
        iconClass={href[2] ? 'far fa-file-pdf' : null}
      />
    ));
  };
  return (
    <div className="more-footer">
      <div className="made-by">
        <p>made by:</p> justjoin.it
      </div>
      <div className="more-links">{toggleHref()}</div>
    </div>
  );
};

export default Footer;
