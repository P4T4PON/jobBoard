import React, { useState } from 'react';
import RangeSlider from '../additions/RangeSlider'

const Salary = ({ isDay, toggleValue }) => {
  const [showSalary, setShowSalary] = useState(false);
  const [value, setValue] = useState([0, 50]);

  const changeValue = (newValue) => {
    setValue(newValue)
  }


  return (
    <div className="allSidebars webkit-right">

      <div
        className={
          showSalary && isDay === false
            ? 'city-buttonNightMode padd0'
            : showSalary
              ? 'city-button padd0'
              : isDay === false
                ? 'city-buttonNightMode '
                : 'city-button '
        }
        id="inputRangeButton"
        onClick={() => setShowSalary(!showSalary)}
      >
        <i className="fas fa-dollar-sign" />
        <p>Salary</p>
        <i className="fas fa-chevron-down" />
      </div>
      {showSalary ? (
        <div className={isDay ? "salaryButton" : 'salaryButton salaryButtonNightMode'}>
          <RangeSlider changeValue={changeValue} toggleValue={toggleValue} description={true} />
        </div>
      ) : null}
    </div>
  );
};

export default Salary;
