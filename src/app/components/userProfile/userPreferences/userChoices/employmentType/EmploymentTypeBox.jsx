import React from 'react';
import UserPreferencesHeader from '../../UserPreferencesHeader';
import Button from '../../Button';

const EmploymentTypeBox = () => {
  return (
    <div className="preferences-box">
      <UserPreferencesHeader
        heading={'preferences-heading purple'}
        className={''}
        iconClass={'far fa-file'}
        title={'Employment type'}
        paragraph={
          'Maybe you have some preferences about your future contract?'
        }
      />
      <div className="preferences-jobStatus">
        <div className="jobStatus-box">
          <Button companySpan={"Doesn't matter"} />

          <Button companySpan={'B2B'} />

          <Button companySpan={'Permanent'} />

          <Button companySpan={'Mandate contact'} />
        </div>
      </div>
    </div>
  );
};

export default EmploymentTypeBox;
