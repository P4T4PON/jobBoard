import React from 'react';
import { Link } from 'react-router-dom';

const AllCitiesButton = ({ city, toggleActive, allCities, isDay }) => {
  return (
    <Link to='/' className={isDay ? "cityLink" : 'cityLink cityLinkNightMode'}>
      <div
        className={
          allCities
            ? 'city-button all padd'
            : isDay === false
              ? 'city-buttonNightMode'
              : 'city-button'
        }
        onClick={toggleActive}
      >
        {city}
      </div>
    </Link>
  );
};

export default AllCitiesButton;
