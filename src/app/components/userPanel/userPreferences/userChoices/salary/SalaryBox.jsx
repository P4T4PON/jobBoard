import React from 'react';
import UserPreferencesBox from '../../userPreferencesBox/UserPreferencesBox'
import RangeSlider from '../../../../additions/RangeSlider'
import AvargeEarningsBox from './avargeEarningsBox/AvargeEarningsBox'

const SalaryBox = ({ userSalary, toggleSalary, salaryError }) => {

  return (
    <UserPreferencesBox
      color={'blue'}
      iconClass={'fas fa-dollar-sign'}
      title={"Let's talk about money. How about your monthly salary expectations?"}
      paragraph={'Be realistic with that :)'}
    >
      <AvargeEarningsBox userSalary={userSalary} />
      <div className='inputBox'>
        <div className="jobStatusBox input-range">
          <RangeSlider changeValue={toggleSalary} toggleValue={toggleSalary} startingValue={userSalary} />
        </div>
      </div>
      <div className='error' style={{ margin: '30px 0 0 0', fontSize: '18px' }}>{salaryError}</div>
    </UserPreferencesBox>
  );
};

export default SalaryBox;
