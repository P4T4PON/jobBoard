import React from 'react';
import { Link } from 'react-router-dom';

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
