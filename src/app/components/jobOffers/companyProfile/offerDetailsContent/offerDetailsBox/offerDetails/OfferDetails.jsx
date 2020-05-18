import React from 'react';
import OfferTechStack from './offerTechStack/OfferTechStack'
import { useSelector } from 'react-redux';

const OfferDetails = ({ description, level }) => {
  const isDay = useSelector(state => state.isDay);
  return (
    <div className="offerDetailsBoxPart">
      <div className="offerDetailsBoxPartContent">
        <div className="offerDots">
          <OfferTechStack level={level} />
        </div>
        <div className={isDay ? "offerDescription" : 'offerDescription offerDescriptionNightMode'}>{description}</div>
        <div className="offerLevel">{level}</div>
      </div>
    </div>
  );
};

export default OfferDetails;
