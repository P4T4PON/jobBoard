import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './JobOffers.css';
import Cities from './filters/cities/Cities';
import Technologies from './filters/technologies/Technologies';

const JobOffers = ({ toggleAllCities, toggleAllTechnologies, toggleExpLevel }) => {
  const isDay = useSelector(state => state.isDay);

  return (
    <div className="main-content">
      <div className={isDay ? 'sub-header' : 'sub-headerNightMode'}>
        <div className="filters">
          <Cities
            toggleAllCities={toggleAllCities}
          />

          <Technologies
            toggleAllTechnologies={toggleAllTechnologies}
            toggleExpLevel={toggleExpLevel}
          />
        </div>
      </div>
    </div>
  );
};

export default JobOffers;
