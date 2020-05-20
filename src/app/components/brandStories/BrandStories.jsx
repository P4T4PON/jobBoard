import React from 'react';
import Cities from '../jobOffers/filters/cities/Cities';
import Brands from '../jobOffers/filters/brands/Brands';
import './BrandStories.css';
import { useSelector } from 'react-redux';
import { Backdrop } from '@material-ui/core';

const BrandStories = () => {
  const isDay = useSelector(state => state.isDay);

  return (
    <div className="main-content">
      <div className={isDay ? 'subHeader' : 'subHeaderNightMode'}>
        <div className="filters">
          <Cities />
          <Brands />
        </div>
      </div>
    </div>
  );
};

export default BrandStories;
