import React from 'react';

const AllCitiesButton = ({ city, toggleActive, allCities, isDay }) => {
  return (
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
  );
};

export default AllCitiesButton;
