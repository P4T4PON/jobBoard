import React from 'react';

const CityButton = ({ className, focusCity, city }) => {
  return (
    <div className={`city-button ${className}`} onClick={focusCity}>
      {city}
    </div>
  );
};

export default CityButton;
