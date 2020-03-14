import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { day } from '../../actions/index';

const NightMode = ({ showOtherCities, setShowOtherCities }) => {
  const isDay = useSelector(state => state.isDay);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <i
        className="fas fa-ellipsis-h"
        id="moreCities-icon"
        onClick={() => setShowOtherCities(!showOtherCities)}
      />
      <div className="night-mode">
        <i
          className="fas fa-sun"
          onClick={() => {
            dispatch(day());
          }}
        />

        <div className="change-mode" onClick={() => dispatch(day())}>
          <div
            className={
              !isDay ? 'change-button change-buttonActive' : 'change-button'
            }
          />
        </div>
        <i
          className="fas fa-moon"
          onClick={() => {
            dispatch(day());
          }}
        />
      </div>
    </Fragment>
  );
};

export default NightMode;
