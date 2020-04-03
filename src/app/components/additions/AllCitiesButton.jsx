import React from 'react';
import { Link } from 'react-router-dom';

const AllCitiesButton = ({ city, toggleActive, allCities, isDay, linkTo }) => {
  return (
    <Link to={linkTo ? '/' : '/brands'}>
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
