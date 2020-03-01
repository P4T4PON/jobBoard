import React, { useState, useEffect } from 'react';
import UserPreferencesHeader from '../../UserPreferencesHeader';
import Button from '../../Button';
import { industry, industryNames } from '../../../../../../constans';

const IndustryBox = () => {
  const [tiles, setTiles] = useState({
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
    //TODO: odradzam Ci używania != , dużo lepiej użyć !==  . Poczytaj sobie o koercji typów i napisz mi dlaczego !== jest lepsze i dobrą praktyką, a != uważa się za złą praktyke
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
    for (let i = 0; i < industryNames.length; i++) {
      tiles[industryNames[i]] = false;
    }
    setTiles({
      ...tiles
    });
  };

  const renderIndustry = () => {
    return industry.map((ind, index) => (
      <Button
        key={index}
        companyIcon={ind[0]}
        companySpan={ind[1]}
        toggleTile={() => handleTileChange(ind[2])}
        active={tiles[ind[2]]}
      />
    ));
  };

  return (
    <div className="preferences-box">
      <UserPreferencesHeader
        heading={'preferences-heading grey'}
        className={''}
        iconClass={'far fa-building'}
        title={'Projects in which industry would you like to develop?'}
        paragraph={
          'We really intend to match the project to you Choose as many as you like.'
        }
      />
      <div className="preferences-jobStatus">
        <div className="jobStatus-box">
          <Button
            companySpan={"Doesn't matter"}
            toggleTile={resetAllTiles}
            active={tiles['all']}
          />
          {renderIndustry()}
        </div>
      </div>
    </div>
  );
};

export default IndustryBox;
