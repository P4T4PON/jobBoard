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
        offer={offer}
        city={city}
        toggleAllCities={toggleAllCities}
        newTechnology={newTechnology}
        expLevel={expLevel}
        isDay={isDay}
        toggleProfile={toggleProfile}
      />
    ));
  };

  const test = () => {
    console.log()
  }

  return (
    <div className={isDay ? 'sidebar-offers' : 'sidebar-offersNightMode'}>
      {test()}
      {renderOffers()}
    </div>
  );
};

export default Sidebar;
