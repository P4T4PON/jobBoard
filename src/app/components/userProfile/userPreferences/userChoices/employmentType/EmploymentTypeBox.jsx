import React, { useState, useEffect } from 'react';
import UserPreferencesHeader from '../../UserPreferencesHeader';
import Button from '../../Button';
import {
  employmentType,
  employmentTypeNames
} from '../../../../../../constans';
import {
  checkTiles,
  resetAllTiles,
  handleTileChange
} from '../../../../../../utils';

const EmploymentTypeBox = ({ isDay }) => {
  const [tiles, setTiles] = useState({
    all: false,
    b2b: false,
    permanent: false,
    mandateContact: false
  });

  useEffect(() => {
    checkTiles(tiles, setTiles);
  });

  const renderEmploymentType = () => {
    return employmentType.map((type, index) => (
      <Button
        key={index}
        companySpan={type[0]}
        toggleTile={() => handleTileChange(type[1], tiles, setTiles)}
        active={tiles[type[1]]}
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
            ? 'preferences-heading purple'
            : 'preferences-heading preferences-headingNightMode purple'
        }
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
            toggleTile={() =>
              resetAllTiles(employmentTypeNames, setTiles, tiles)
            }
            active={tiles['all']}
            isDay={isDay}
          />
          {renderEmploymentType()}
        </div>
      </div>
    </div>
  );
};

export default EmploymentTypeBox;
