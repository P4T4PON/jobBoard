import React from 'react';
import PriceCardHeader from './header/PriceCardHeader'
import PriceCardDescription from './description/PriceCardDescription'
import Recomended from './recomended/Recomended'

const PriceCard = ({ pl, type, price, priceCard }) => {

  const renderPriceCard = () => {
    return priceCard.map((card, index) => (
      <li key={index}>
        <div>
          <i className={card[2]} />
        </div>
        {pl ? card[0] : card[1]}
      </li>
    ));
  };

  return (
    <div className="priceCard">
      <Recomended pl={pl} type={type} />
      <PriceCardHeader type={type} price={price} />
      <PriceCardDescription renderPriceCard={renderPriceCard} pl={pl} />
    </div>
  );
};

export default PriceCard;
