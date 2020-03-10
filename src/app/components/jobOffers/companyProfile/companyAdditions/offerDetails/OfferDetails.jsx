import React from 'react';
import NiceToHave from './NiceToHave';
import Junior from './Junior';
import Regular from './Regular';
import Advanced from './Advanced';
import Senior from './Senior';

const OfferDetails = ({ description, level }) => {
  return (
    <div className="offer-details-box-part">
      <div className="offer-details-box-part-content">
        <div className="offer-dots">
          {level === 'nice to have' ? (
            <NiceToHave />
          ) : level === 'junior' ? (
            <Junior />
          ) : level === 'regular' ? (
            <Regular />
          ) : level === 'advanced' ? (
            <Advanced />
          ) : (
            <Senior />
          )}
        </div>
        <div className="offer-description">{description}</div>
        <div className="offer-level">{level}</div>
      </div>
    </div>
  );
};

export default OfferDetails;
