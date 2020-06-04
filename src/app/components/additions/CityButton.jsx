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
  text,
  brands
}) => {
  return (
    <Link to={brands ? '/brands' : '/'} onClick={choseCity ? () => choseCity(city) : null}>
      <div
        className={
          cityId === active && allCities === false ? 'cityButton all'
            : isDay === false ? 'cityButton cityButtonNightMode'
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
