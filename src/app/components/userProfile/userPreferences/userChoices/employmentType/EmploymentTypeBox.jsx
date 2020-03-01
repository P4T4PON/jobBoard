import React, { useState, useEffect } from 'react';
import UserPreferencesHeader from '../../UserPreferencesHeader';
import Button from '../../Button';
import {
  employmentType,
  employmentTypeNames
} from '../../../../../../constans';
//TODO: Tu również kod z logiką jest duplikowany, !DRY ;)
const EmploymentTypeBox = () => {
  const [tiles, setTiles] = useState({
    all: false,
    b2b: false,
    permanent: false,
    mandateContact: false
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
    for (let i = 0; i < employmentTypeNames.length; i++) {
      tiles[employmentTypeNames[i]] = false;
    }
    setTiles({
      ...tiles
    });
  };

  const renderEmploymentType = () => {
    return employmentType.map((type, index) => (
      <Button
        key={index}
        companySpan={type[0]}
        toggleTile={() => handleTileChange(type[1])}
        active={tiles[type[1]]}
      />
    ));
  };
  return (
    <div className="preferences-box">
      <UserPreferencesHeader
        heading={'preferences-heading purple'}
        className={''}
        iconClass={'far fa-file'}
        title={'Employment type'}
        paragraph={
          'Maybe you have some preferences about your future contract?'
        }
      />
      <div className="preferences-jobStatus">
        <div className="jobStatus-box">
          <Button
            companySpan={"Doesn't matter"}
            toggleTile={resetAllTiles}
            active={tiles['all']}
          />
          {renderEmploymentType()}
        </div>
      </div>
    </div>
  );
};

export default EmploymentTypeBox;
