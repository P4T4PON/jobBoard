import React, { useState, useEffect } from 'react';
import UserPreferencesHeader from '../../UserPreferencesHeader';
import Tile from '../../Tile';
import { companyKind, companyKindNames } from '../../../../../../constans';
import {
  checkTiles,
  resetAllTiles,
  handleTileChange
} from '../../../../../../helperFunctions';

const CompanyKindBox = () => {
  const [tiles, setTiles] = useState({
    all: false,
    startup: false,
    softwareHouse: false,
    ecommerce: false,
    corporation: false
  });

  useEffect(() => {
    checkTiles(tiles, setTiles);
  });

  const renderCompanyKind = () => {
    return companyKind.map((kind, index) => (
      <Tile
        key={index}
        companyIcon={kind[0]}
        companySpan={kind[1]}
        toggleTile={
          kind[2] === 'all'
            ? () => resetAllTiles(companyKindNames, setTiles, tiles)
            : () => handleTileChange(kind[2], tiles, setTiles)
        }
        active={tiles[kind[2]]}
      />
    ));
  };

  return (
    <div className="preferences-box">
      <UserPreferencesHeader
        heading={'preferences-heading red'}
        className={''}
        iconClass={'fas fa-city'}
        title={'For what kind of company would you like to work for'}
        paragraph={'We want to find a company that trully fits you'}
      />
      <div className="preferences-jobStatus">
        <div className="jobStatus-box">{renderCompanyKind()}</div>
      </div>
    </div>
  );
};

export default CompanyKindBox;
