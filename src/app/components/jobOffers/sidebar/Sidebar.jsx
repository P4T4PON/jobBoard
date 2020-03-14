import React from 'react';
import './Sidebar.css';
import OfferItem from './OfferItem';
import { companyOffers } from '../../../../constans';

const Sidebar = ({
  toggleProfile,
  city,
  toggleAllCities,
  newTechnology,
  expLevel,
  isDay
}) => {
  const renderOffers = () => {
    return companyOffers.map((offer, index) => (
      <OfferItem
        key={index}
        link={offer.link}
        img={offer.img}
        bgColor={offer.bgColor}
        itemBorder={offer.itemBorder}
        title={offer.title}
        toggleProfile={toggleProfile}
        min={offer.min}
        max={offer.max}
        companyName={offer.companyName}
        companyAddress={[offer.companyAddress, offer.companyCity]}
        name={offer.name}
        companyLink={offer.companyLink}
        companySize={offer.companySize}
        companyType={offer.companyType}
        exp={offer.exp}
        age={offer.age}
        companyTags={offer.companyTags.map(tag => tag)}
        offerDetail={offer.companyOfferDetails.map(detail => [
          detail[0],
          detail[1]
        ])}
        companyDescription={offer.companyDescription}
        remote={offer.remote}
        city={city}
        toggleAllCities={toggleAllCities}
        oldTechnology={offer.technology}
        newTechnology={newTechnology}
        expLevel={expLevel}
        isDay={isDay}
      />
    ));
  };

  return (
    <div className={isDay ? 'sidebar-offers' : 'sidebar-offersNightMode'}>
      {renderOffers()}
    </div>
  );
};

export default Sidebar;
