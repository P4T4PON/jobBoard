import React from 'react';
import PriceCard from './PriceCard';

const PriceCards = ({ pl }) => {
  return (
    <div className="price-offers">
      <PriceCard pl={pl} type={'Basic'} price={'390'} />
      <PriceCard pl={pl} type={'Premium'} price={'490'} />
      <PriceCard pl={pl} type={'Business'} price={'790'} />
    </div>
  );
};

export default PriceCards;
