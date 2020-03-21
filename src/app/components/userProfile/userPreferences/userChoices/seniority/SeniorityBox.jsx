import React, { useState, useEffect } from 'react';
import UserPreferencesHeader from '../../UserPreferencesHeader';
import Button from '../../Button';
import { seniority, seniorityNames } from '../../../../../../constans';

const SeniorityBox = ({ isDay }) => {
  const [tiles, setTiles] = useState({
    all: false,
    junior: false,
    mid: false,
    senior: false
  });

  useEffect(() => {
    checkTiles();
  });

  const checkTiles = () => {
    const activatedTiles = Object.keys(tiles).filter(k => tiles[k]);
    let newTiles = tiles;

    if (activatedTiles.length === 0) {
      newTiles['all'] = true;
      setTiles({ ...newTiles });
    } else if (activatedTiles.length > 1 && newTiles['all'] != false) {
      newTiles['all'] = false;
      setTiles({ ...newTiles });
    }
  };

  const handleTileChange = name => {
    let newTiles = tiles;
    newTiles[name] = !newTiles[name];
    setTiles({
      ...newTiles
    });
  };

  const resetAllTiles = () => {
    for (let i = 0; i < seniorityNames.length; i++) {
      tiles[seniorityNames[i]] = false;
    }
    setTiles({
      ...tiles
    });
  };

  const renderSeniority = () => {
    return seniority.map((senior, index) => (
      <Button
        key={index}
        companySpan={senior[0]}
        toggleTile={() => handleTileChange(senior[1])}
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
            toggleTile={resetAllTiles}
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
