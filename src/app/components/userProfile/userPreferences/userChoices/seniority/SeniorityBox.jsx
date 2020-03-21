import React, { useState, useEffect } from 'react';
import UserPreferencesHeader from '../../UserPreferencesHeader';
import Button from '../../Button';
import { seniority, seniorityNames } from '../../../../../../constans';
import {
  checkTiles,
  resetAllTiles,
  handleTileChange
} from '../../../../../../utils';

const SeniorityBox = ({ isDay }) => {
  const [tiles, setTiles] = useState({
    all: false,
    junior: false,
    mid: false,
    senior: false
  });

  useEffect(() => {
    checkTiles(tiles, setTiles);
  });

  const renderSeniority = () => {
    return seniority.map((senior, index) => (
      <Button
        key={index}
        companySpan={senior[0]}
        toggleTile={() => handleTileChange(senior[1], tiles, setTiles)}
        active={tiles[senior[1]]}
        isDay={isDay}
      />
    ));
  };
  return (
    <div
      className={
        isDay ? 'preferences-box' : 'preferences-box preferences-boxNightMode'
      }
    >
      <UserPreferencesHeader
        heading={
          isDay
            ? 'preferences-heading green'
            : 'preferences-heading preferences-headingNightMode green'
        }
        className={''}
        iconClass={'fas fa-chart-line'}
        title={'Seniority'}
        paragraph={'We would like to know how experienced you are.'}
      />
      <div className="preferences-jobStatus">
        <div className="jobStatus-box">
          <Button
            companySpan={"Doesn't matter"}
            toggleTile={() => resetAllTiles(seniorityNames, setTiles, tiles)}
            active={tiles['all']}
            isDay={isDay}
          />
          {renderSeniority()}
        </div>
      </div>
    </div>
  );
};

export default SeniorityBox;
