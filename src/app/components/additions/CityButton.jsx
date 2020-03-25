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
    <Link to='/' className="cityLink">
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
    </Link>
  );
};

export default CityButton;
