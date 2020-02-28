import React, { useState, useEffect } from 'react';
import UserPreferencesHeader from '../../UserPreferencesHeader';
import Tile from '../../Tile';
import { companyKind, companyKindNames } from '../../../../../../constans';

const CompanyKindBox = () => {
  const [tiles, setTiles] = useState({
    all: false,
    startup: false,
    softwareHouse: false,
    ecommerce: false,
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
    for (let i = 0; i < companyKindNames.length; i++) {
      tiles[companyKindNames[i]] = false;
    }
    setTiles({
      ...tiles
    });
  };

  const renderCompanyKind = () => {
    return companyKind.map((kind, index) => (
      <Tile
        key={index}
        companyIcon={kind[0]}
        companySpan={kind[1]}
        toggleTile={
          kind[2] === 'all' ? resetAllTiles : () => handleTileChange(kind[2])
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
