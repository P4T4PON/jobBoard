import React from 'react';
import { Link } from 'react-router-dom';

const AllCitiesButton = ({ city, toggleActive, allCities, isDay, linkTo }) => {
  return (
    <Link to={linkTo ? '/' : '/brands'}>
      <div
        className={
          allCities
            ? 'cityButton all padd'
            : isDay === false
              ? 'cityButtonNightMode'
              : 'cityButton'
        }
        onClick={toggleActive}
      >
        {city}
      </div>
    </Link>
  );
};

export default AllCitiesButton;
