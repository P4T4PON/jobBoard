import React, { useState, useEffect } from 'react';
import UserPreferencerBox from '../../userPreferencesBox/UserPreferencesBox'
import Button from '../../Button';
import { industry, industryNames } from '../../../../../../constans';
import {
  checkTiles,
  resetAllTiles,
  handleTileChange
} from '../../../../../../utils';

const IndustryBox = ({ isDay, userIndustry, toggleIndustry, industryError }) => {

  const [test, setTest] = useState({
    all: false,
    fintech: false,
    bloackchain: false,
    ecommerce: false,
    medicine: false,
    military: false,
    travel: false,
    martech: false,
    iot: false,
    logistic: false,
    beauty: false,
    other: false
  })

  useEffect(() => {
    checkTiles(test, toggleIndustry);
  });

  const renderIndustry = () => {
    return industry.map((ind, index) => (
      <Button
        key={index}
        companyIcon={ind.icon}
        companySpan={ind.text}
        toggleTile={() => handleTileChange(ind.kind, test, toggleIndustry)}
        active={userIndustry[ind.kind]}
        isDay={isDay}
      />
    ));
  };
  return (
    <UserPreferencerBox
      color={'grey'}
      iconClass={'far fa-building'}
      title={'Projects in which industry would you like to develop?'}
      paragraph={
        'We really intend to match the project to you Choose as many as you like.'
      }
    >
      <div className="preferencesJobStatus">
        <div className="jobStatusBox">
          <Button
            companySpan={"Doesn't matter"}
            toggleTile={() => resetAllTiles(industryNames, toggleIndustry, test)}
            active={userIndustry['all']}
            isDay={isDay}
          />
          {renderIndustry()}
        </div>
      </div>
      <div className='error' style={{ margin: '10px 0 0 0', fontSize: '18px' }}>{industryError}</div>
    </UserPreferencerBox>
  );
};

export default IndustryBox;

