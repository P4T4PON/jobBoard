import React from 'react';
import './Sidebar.css';
import OfferItem from './OfferItem';
import { companyOffers } from '../../../../constans';
import Map from '../../map/MapBox';

const Sidebar = ({
  toggleProfile,
  city,
  toggleAllCities,
  newTechnology,
  expLevel,
  isDay,
  value
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
        value={value}
      />
    ));
  };

  const test = () => {
    console.log()
  }

  return (
    <div className='sidebar-box'>
      <div className={isDay ? 'sidebar-offers' : 'sidebar-offersNightMode'}>
        {test()}
        {renderOffers()}
      </div>
      <div className='sidebar-map'><Map city={city} technology={newTechnology} expLevel={expLevel} /></div>
    </div>
  );
};

export default Sidebar;
