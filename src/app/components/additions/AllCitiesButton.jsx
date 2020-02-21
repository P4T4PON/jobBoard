import React from 'react';

const AllCitiesButton = ({ city, toggleActive, allCities }) => {
  return (
    <div
      className={allCities ? 'city-button all padd' : 'city-button'}
      onClick={toggleActive}
    >
      {city}
    </div>
  );
};

export default AllCitiesButton;
