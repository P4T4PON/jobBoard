import React from 'react';
import { Link } from 'react-router-dom';

const CityButton = ({
  city,
  active,
  toggleActive,
  cityId,
  allCities,
  isDay
}) => {
  return (
    <div
      className={
        cityId === active && allCities === false
          ? 'city-button all'
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

export default CityButton;
