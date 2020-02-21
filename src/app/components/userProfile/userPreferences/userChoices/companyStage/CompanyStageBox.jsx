import React, { useState, useEffect } from 'react';
import UserPreferencesHeader from '../../UserPreferencesHeader';
import Tile from '../../Tile';

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
    console.log(activatedTiles);

    if (activatedTiles.length === 0) {
      let newTiles = tiles;
      newTiles['all'] = true;
      setTiles(newTiles);
    }
  };

  const handleTileChange = name => {
    let newTiles = tiles;
    newTiles[name] = !newTiles[name];
    setTiles(
      {
        ...newTiles
      },
      checkTiles()
    );
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
      <div className="jobStatus-box">
        <Tile
          companyIcon={'far fa-check-square'}
          companySpan={"Doesn't matter"}
          toggleTile={() => handleTileChange('all')}
          active={tiles['all']}
        />

        <Tile
          companyIcon={'fas fa-home'}
          companySpan={'Early stage(0-30)'}
          toggleTile={() => handleTileChange('earlyStage')}
          active={tiles['earlyStage']}
        />

        <Tile
          companyIcon={'far fa-building'}
          companySpan={'Growth stage (30-100)'}
          toggleTile={() => handleTileChange('growthStage')}
          active={tiles['growthStage']}
        />

        <Tile
          companyIcon={'fas fa-city'}
          companySpan={'Estabilished(100-250)'}
          toggleTile={() => handleTileChange('estabilished')}
          active={tiles['estabilished']}
        />

        <Tile
          companyIcon={'fas fa-university'}
          companySpan={'Corporation(250+)'}
          toggleTile={() => handleTileChange('corporation')}
          active={tiles['corporation']}
        />
      </div>
    </div>
  );
};

export default CompanyStageBox;
