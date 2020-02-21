import React from 'react';

const CityButton = ({ city, active, toggleActive, cityId, allCities }) => {
  return (
    <div
      className={
        cityId === active && allCities === false
          ? 'city-button all'
          : 'city-button'
      }
      onClick={toggleActive}
    >
      {city}
    </div>
  );
};

export default CityButton;
