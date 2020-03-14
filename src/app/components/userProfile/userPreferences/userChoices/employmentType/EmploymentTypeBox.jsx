import React, { useState, useEffect } from 'react';
import UserPreferencesHeader from '../../UserPreferencesHeader';
import Button from '../../Button';
import {
  employmentType,
  employmentTypeNames,
  employmentTypeState
} from '../../../../../../constans';
import {
  checkTiles,
  resetAllTiles,
  handleTileChange
} from '../../../../../../helperFunctions';
const EmploymentTypeBox = () => {
  const [tiles, setTiles] = useState(employmentTypeState);

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
            toggleTile={() =>
              resetAllTiles(employmentTypeNames, setTiles, tiles)
            }
            active={tiles['all']}
          />
          {renderEmploymentType()}
        </div>
      </div>
    </div>
  );
};

export default EmploymentTypeBox;
