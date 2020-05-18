import React, { useState, useEffect } from 'react';
import Button from '../../Button';
import UserPreferencesBox from '../../userPreferencesBox/UserPreferencesBox'
import { seniority, seniorityNames } from '../../../../../../constans';
import {
  checkTiles,
  resetAllTiles,
  handleTileChange
} from '../../../../../../utils';

const SeniorityBox = ({ isDay, userSeniority, toggleSeniority, seniorityError }) => {

  const [test, setTest] = useState({
    all: false,
    junior: false,
    mid: false,
    senior: false
  })

  useEffect(() => {
    checkTiles(test, toggleSeniority);
  });

  const renderSeniority = () => {
    return seniority.map((senior, index) => (
      <Button
        key={index}
        companySpan={senior.text}
        toggleTile={() => handleTileChange(senior.text.toLowerCase(), test, toggleSeniority)}
        active={userSeniority[senior.text.toLowerCase()]}
        isDay={isDay}
      />
    ));
  };
  return (
    <UserPreferencesBox
      color={'green'}
      iconClass={'fas fa-chart-line'}
      title={'Seniority'}
      paragraph={'We would like to know how experienced you are.'}
    >
      <div className="preferences-jobStatus">
        <div className="jobStatus-box">
          <Button
            companySpan={"Doesn't matter"}
            toggleTile={() => resetAllTiles(seniorityNames, toggleSeniority, test)}
            active={userSeniority['all']}
            isDay={isDay}
          />
          {renderSeniority()}
        </div>
      </div>
      <div className='error' style={{ margin: '10px 0 0 0', fontSize: '18px' }}>{seniorityError}</div>
    </UserPreferencesBox>
  );
};

export default SeniorityBox;
