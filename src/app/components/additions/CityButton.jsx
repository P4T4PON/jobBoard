import React from 'react';
import { Link } from 'react-router-dom';

const CityButton = ({
  city,
  active,
  toggleActive,
  cityId,
  allCities,
  isDay,
  choseCity,
  chosenCity,
  text
}) => {
  return (
    <Link to='/' onClick={() => choseCity(city)}>
      <div
        className={
          cityId === active && allCities === false ? 'cityButton all'
            : isDay === false ? 'cityButtonNightMode'
              : chosenCity === city ? 'cityButton chosen'
                : 'cityButton'
        }
        onClick={toggleActive}
      >
        {city}{text}
      </div>
    </Link>
  );
};

export default CityButton;
