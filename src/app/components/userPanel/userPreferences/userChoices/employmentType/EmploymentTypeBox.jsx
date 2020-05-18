import React, { useState, useEffect } from 'react';
import UserPreferencesBox from '../../userPreferencesBox/UserPreferencesBox'
import Button from '../../Button';
import {
  employmentType,
  employmentTypeNames
} from '../../../../../../constans';
import {
  checkTiles,
  resetAllTiles,
  handleTileChange
} from '../../../../../../utils';

const EmploymentTypeBox = ({ isDay, userEmployment, toggleEmployment, employmentError }) => {

  const [test, setTest] = useState({
    all: false,
    b2b: false,
    permanent: false,
    mandateContact: false
  })

  useEffect(() => {
    checkTiles(test, toggleEmployment);
  });

  const renderEmploymentType = () => {
    return employmentType.map((type, index) => (
      <Button
        key={index}
        companySpan={type[0]}
        toggleTile={() => handleTileChange(type[1], test, toggleEmployment)}
        active={userEmployment[type[1]]}
        isDay={isDay}
      />
    ));
  };
  return (
    <UserPreferencesBox
      color={'purple'}
      iconClass={'far fa-file'}
      title={'Employment type'}
      paragraph={'Maybe you have some preferences about your future contract?'}
    >
      <div className="preferences-jobStatus">
        <div className="jobStatus-box">
          <Button
            companySpan={"Doesn't matter"}
            toggleTile={() =>
              resetAllTiles(employmentTypeNames, toggleEmployment, test)
            }
            active={userEmployment['all']}
            isDay={isDay}
          />
          {renderEmploymentType()}
        </div>
      </div>
      <div className='error' style={{ margin: '10px 0 0 0', fontSize: '18px' }}>{employmentError}</div>
    </UserPreferencesBox>
  );
};

export default EmploymentTypeBox;
