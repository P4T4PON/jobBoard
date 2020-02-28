import React from 'react';
import {
  priceCardBasicPl,
  priceCardBasicEng,
  priceCardPremiumPl,
  priceCardPremiumEng,
  priceCardBusinessPl,
  priceCardBusinessEng
} from '../../../../../constans';
import Submit from '../../../additions/SubmitButton';

const renderPriceCardBasicPl = () => {
  return priceCardBasicPl.map((card, index) => (
    <li key={index}>
      <div>
        <i className={card[1]}></i>
      </div>
      {card[0]}
    </li>
  ));
};

const renderPriceCardBasicEng = () => {
  return priceCardBasicEng.map((card, index) => (
    <li key={index}>
      <div>
        <i className={card[1]}></i>
      </div>
      {card[0]}
    </li>
  ));
};

const renderPriceCardPremiumPl = () => {
  return priceCardPremiumPl.map((card, index) => (
    <li key={index}>
      <div>
        <i className={card[1]}></i>
      </div>
      {card[0]}
    </li>
  ));
};

const renderPriceCardPremiumEng = () => {
  return priceCardPremiumEng.map((card, index) => (
    <li key={index}>
      <div>
        <i className={card[1]}></i>
      </div>
      {card[0]}
    </li>
  ));
};

const renderPriceCardBusinessPl = () => {
  return priceCardBusinessPl.map((card, index) => (
    <li key={index}>
      <div>
        <i className={card[1]}></i>
      </div>
      {card[0]}
    </li>
  ));
};

const renderPriceCardBusinessEng = () => {
  return priceCardBusinessEng.map((card, index) => (
    <li key={index}>
      <div>
        <i className={card[1]}></i>
      </div>
      {card[0]}
    </li>
  ));
};

const PriceCard = ({ pl, type, price }) => {
  return (
    <div className="price-card">
      {type === 'Premium' ? (
        <div className="recomended-text">
          {pl ? 'Najczęściej wybierany' : 'Recommended'}
        </div>
      ) : null}
      <div className="card-header">
        <div className="header">{type}</div>
        <div className="price">
          <div className="value">{price}</div>
          <div className="currency">PLN</div>
        </div>
        <span className="after" />
      </div>
      <div className="description">
        <ul className="benefits">
          {pl && type === 'Basic'
            ? renderPriceCardBasicPl()
            : type === 'Basic'
            ? renderPriceCardBasicEng()
            : null}
          {pl && type === 'Premium'
            ? renderPriceCardPremiumPl()
            : type === 'Premium'
            ? renderPriceCardPremiumEng()
            : null}
          {pl && type === 'Business'
            ? renderPriceCardBusinessPl()
            : type === 'Business'
            ? renderPriceCardBusinessEng()
            : null}
        </ul>
        <Submit
          divClass={'widdth'}
          value={pl ? 'Kup ogłoszenie' : 'Post a job'}
          className={'price-button'}
        />
      </div>
    </div>
  );
};

export default PriceCard;
