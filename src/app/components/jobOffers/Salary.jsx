import React, { useState } from 'react';
import InputRange from 'react-input-range';

const Salary = () => {
  const [showSalary, setShowSalary] = useState(false);
  const [value, setValue] = useState({
    min: 0,
    max: 34
  });
  return (
    <div className="allSidebars webkit-right">
      <div
        className={showSalary ? 'city-button padd0' : 'city-button'}
        id="inputRangeButton"
        onClick={() => setShowSalary(!showSalary)}
      >
        <i className="fas fa-dollar-sign" />
        <p>Salary</p>
        <i className="fas fa-chevron-down" />
      </div>
      {showSalary ? (
        <div className="salaryButton">
          <InputRange
            maxValue={34}
            minValue={0}
            value={value}
            onChange={value => setValue(value)}
            formatLabel={value => `${value} k`}
            allowSameValues={true}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Salary;
