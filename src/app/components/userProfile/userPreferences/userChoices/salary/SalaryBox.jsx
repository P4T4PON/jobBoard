import React, { useState } from 'react';
import UserPreferencesHeader from '../../UserPreferencesHeader';
import RangeSlider from '../../../../additions/RangeSlider'

const SalaryBox = ({ isDay }) => {
  const [value, setValue] = useState([0, 50]);


  const changeValue = (newValue) => {
    setValue(newValue)
  }

  const toggleValue = () => { }

  return (
    <div
      className={
        isDay ? 'preferences-box' : 'preferences-box preferences-boxNightMode'
      }
    >
      <UserPreferencesHeader
        heading={
          isDay
            ? 'preferences-heading blue'
            : 'preferences-heading preferences-headingNightMode blue'
        }
        className={'width-100'}
        iconClass={'fas fa-dollar-sign'}
        title={
          "Let's talk about money. How about your monthly salary expectations?"
        }
        paragraph={'Be realistic with that :)'}
      />

      <div className="input-values">
        <span className="input-span">
          {value[0] * 1000} - {value[1] * 1000} (PLN)
        </span>

        <div className="input-value">
          Average earnings: {((value[1] + value[0]) / 2) * 1000} PLN
        </div>
      </div>
      <div className='inputBox'>
        <div className="jobStatus-box input-range">
          <RangeSlider changeValue={changeValue} toggleValue={toggleValue} />
        </div>
      </div>
    </div>
  );
};

export default SalaryBox;
