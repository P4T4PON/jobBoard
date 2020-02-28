import React, { useState, useEffect } from 'react';
import UserPreferencesHeader from '../../UserPreferencesHeader';
import Tile from '../../Tile';
import { companyStage, companyStageNames } from '../../../../../../constans';

const CompanyStageBox = () => {
  const [tiles, setTiles] = useState({
    all: false,
    earlyStage: false,
    growthStage: false,
    estabilished: false,
    corporation: false
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
    } else if (activatedTiles.length > 1 && newTiles['all'] !== false) {
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
    for (let i = 0; i < companyStageNames.length; i++) {
      tiles[companyStageNames[i]] = false;
    }
    setTiles({
      ...tiles
    });
  };

  const renderCompanyStage = () => {
    return companyStage.map((stage, index) => (
      <Tile
        key={index}
        companyIcon={stage[0]}
        companySpan={stage[1]}
        toggleTile={
          stage[2] === 'all' ? resetAllTiles : () => handleTileChange(stage[2])
        }
        active={tiles[stage[2]]}
      />
    ));
  };

  return (
    <div className="preferences-box">
      <UserPreferencesHeader
        heading={'preferences-heading orange'}
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
