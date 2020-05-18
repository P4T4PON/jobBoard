import React from 'react';
import './Sidebar.css';
import OfferItem from './offerItem/OfferItem';
import { companyOffers } from '../../../../../constans';

const Sidebar = ({ toggleProfile, city, toggleAllCities, newTechnology, expLevel, isDay, value }) => {
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
        value={value}
      />
    ));
  };

  return (
    renderOffers()
  );
};

export default Sidebar;
