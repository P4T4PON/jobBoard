import React, { Fragment } from 'react';

const NightMode = ({
  nightMode,
  showOtherCities,
  setNightMode,
  setShowOtherCities
}) => {
  return (
    <Fragment>
      <i
        className="fas fa-ellipsis-h"
        id="moreCities-icon"
        onClick={() => setShowOtherCities(!showOtherCities)}
      ></i>
      <div className="night-mode">
        <i className="fas fa-sun" onClick={() => setNightMode(false)}></i>

        <div className="change-mode" onClick={() => setNightMode(!nightMode)}>
          <div
            className={
              nightMode ? 'change-button change-buttonActive' : 'change-button'
            }
          ></div>
        </div>
        <i className="fas fa-moon" onClick={() => setNightMode(true)}></i>
      </div>
    </Fragment>
  );
};

export default NightMode;
