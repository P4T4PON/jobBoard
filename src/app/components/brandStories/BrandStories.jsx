import React from 'react';
import Cities from '../jobOffers/filters/cities/Cities';
import Brands from '../jobOffers/filters/brands/Brands';
import './BrandStories.css';

const BrandStories = () => {
  return (
    <div className="main-content">
      <div className="sub-header">
        <div className="filters">
          <Cities />

          <Brands />
        </div>
      </div>
    </div>
  );
};

export default BrandStories;
