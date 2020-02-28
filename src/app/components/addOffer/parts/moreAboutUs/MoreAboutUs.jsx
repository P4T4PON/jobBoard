import React from 'react';
import { AddOfferItems } from '../../../../../constans';
import AddOfferItem from '../../AddOfferItem';
import Submit from '../../../additions/SubmitButton';
import Macbook from '../../macbook.png';
import Footer from './Footer';
const MoreAboutUs = ({ pl }) => {
  const toggleOffer = () => {
    return AddOfferItems.map((offer, index) => (
      <AddOfferItem
        key={index}
        pl={pl}
        img={offer[2]}
        textPl={offer[0]}
        textEng={offer[1]}
      />
    ));
  };
  return (
    <div className="moreaboutus">
      <div className="more-main">
        <div className="text-col">
          <h1>
            {pl ? 'Nieco więcej o:' : 'A bit more about:'}
            <div className="card-number bigger">Justjoin.it</div>
          </h1>

          <div className="items">{toggleOffer()}</div>
        </div>
        <div className="img-col">
          <img src={Macbook} alt="" />
        </div>
      </div>

      <Submit
        divClass={'button-center'}
        className={'price-button foot'}
        value={pl ? 'Kup ogłoszenie' : 'Post a job'}
      />

      <Footer />
    </div>
  );
};

export default MoreAboutUs;
