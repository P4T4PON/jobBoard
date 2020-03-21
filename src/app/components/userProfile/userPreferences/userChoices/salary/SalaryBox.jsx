import React, { useState } from 'react';
import UserPreferencesHeader from '../../UserPreferencesHeader';
import InputRange from 'react-input-range';

const SalaryBox = ({ isDay }) => {
  const [value, setValue] = useState({
    min: 0,
    max: 50
  });

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
          {value.min * 1000} - {value.max * 1000} (PLN)
        </span>

        <div className="input-value">
          Average earnings: {((value.max + value.min) / 2) * 1000} PLN
        </div>
      </div>

      <div className="jobStatus-box input-range">
        <InputRange
          maxValue={50}
          minValue={0}
          value={value}
          onChange={value => setValue(value)}
          formatLabel={value => `${value * 1000} PLN`}
          allowSameValues={true}
        />
      </div>
    </div>
  );
};

export default SalaryBox;
