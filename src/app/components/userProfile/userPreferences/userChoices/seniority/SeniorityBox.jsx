import React from 'react';
import UserPreferencesHeader from '../../UserPreferencesHeader';
import Button from '../../Button';

const SeniorityBox = () => {
  return (
    <div className="preferences-box">
      <UserPreferencesHeader
        heading={'preferences-heading green'}
        className={''}
        iconClass={'fas fa-chart-line'}
        title={'Seniority'}
        paragraph={'We would like to know how experienced you are.'}
      />
      <div className="preferences-jobStatus">
        <div className="jobStatus-box">
          <Button companySpan={"Doesn't matter"} />

          <Button companySpan={'Junior'} />

          <Button companySpan={'Mid'} />

          <Button companySpan={'Senior'} />
        </div>
      </div>
    </div>
  );
};

export default SeniorityBox;
