import React from 'react';
import Cities from '../jobOffers/filters/cities/Cities';
import Brands from '../jobOffers/filters/brands/Brands';
import './BrandStories.css';
import { useSelector } from 'react-redux';

const BrandStories = () => {
  const isDay = useSelector(state => state.isDay);

  return (
    <div className="main-content">
      <div className={isDay ? 'sub-header' : 'sub-headerNightMode'}>
        <div className="filters">
          <Cities />

          <Brands />
        </div>
      </div>
    </div>
  );
};

export default BrandStories;
