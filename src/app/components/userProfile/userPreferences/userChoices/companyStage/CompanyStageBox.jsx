import React, { useState, useEffect } from 'react';
import UserPreferencesHeader from '../../UserPreferencesHeader';
import Tile from '../../Tile';
import { companyStage, companyStageNames } from '../../../../../../constans';
import {
  checkTiles,
  resetAllTiles,
  handleTileChange
} from '../../../../../../utils';

const CompanyStageBox = ({ isDay }) => {
  const [tiles, setTiles] = useState({
    all: false,
    earlyStage: false,
    growthStage: false,
    estabilished: false,
    corporation: false
  });

  useEffect(() => {
    checkTiles(tiles, setTiles);
  });

  const renderCompanyStage = () => {
    return companyStage.map((stage, index) => (
      <Tile
        key={index}
        companyIcon={stage[0]}
        companySpan={stage[1]}
        toggleTile={
          stage[2] === 'all'
            ? () => resetAllTiles(companyStageNames, setTiles, tiles)
            : () => handleTileChange(stage[2], tiles, setTiles)
        }
        active={tiles[stage[2]]}
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
            ? 'preferences-heading orange'
            : 'preferences-heading preferences-headingNightMode orange'
        }
        className={''}
        iconClass={'fas fa-user-friends'}
        title={'What stage should the company be in?'}
        paragraph={'Choose as many as you like.'}
      />
      <div className="jobStatus-box">{renderCompanyStage()}</div>
    </div>
  );
};

export default CompanyStageBox;
