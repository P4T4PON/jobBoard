import React, { useState } from 'react';
import Cities from '../jobOffers/filters/cities/Cities';
import Brands from '../jobOffers/filters/brands/Brands';
import './BrandStories.css';
import { useSelector } from 'react-redux';


const BrandStories = () => {
  const isDay = useSelector(state => state.isDay);
  const [path, setPath] = useState('/');
  const [city, setCity] = useState('');

  const toggleAllCities = (newCity, newPath) => {
    setCity(newCity);
    setPath(newPath);
  };

  return (
    <div className="main-content">
      <div className={isDay ? 'subHeader' : 'subHeaderNightMode'}>
        <div className="filters">
          <Cities brands={true} toggleAllCities={toggleAllCities} />
          <Brands />
        </div>
      </div>
    </div>
  );
};

export default BrandStories;
