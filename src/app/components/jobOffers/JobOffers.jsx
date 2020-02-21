import React from 'react';
import './JobOffers.css';

import Cities from './filters/cities/Cities';
import Technologies from './filters/technologies/Technologies';

const JobOffers = () => {
  return (
    <div className="main-content">
      <div className="sub-header">
        <div className="filters">
          <Cities />

          <Technologies />
        </div>
      </div>
    </div>
  );
};

export default JobOffers;
