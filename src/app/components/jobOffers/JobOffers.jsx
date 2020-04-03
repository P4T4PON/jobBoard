import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './JobOffers.css';
import Cities from './filters/cities/Cities';
import Technologies from './filters/technologies/Technologies';
import Sidebar from '../jobOffers/sidebar/Sidebar';
import CompanyProfile from '../jobOffers/companyProfile/CompanyProfile';

const JobOffers = ({ toggleAllCities, toggleAllTechnologies, toggleExpLevel, toggleValue, linkTo }) => {
  const isDay = useSelector(state => state.isDay);

  return (
    <div className="main-content">
      <div className={isDay ? 'sub-header' : 'sub-headerNightMode'}>
        <div className="filters">
          <Cities
            toggleAllCities={toggleAllCities}
            linkTo={linkTo}
          />

          <Technologies
            toggleAllTechnologies={toggleAllTechnologies}
            toggleExpLevel={toggleExpLevel}
            toggleValue={toggleValue}
            linkTo={linkTo}
          />
        </div>
      </div>
    </div>
  );
};

export default JobOffers;
