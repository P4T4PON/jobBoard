import React, { useState, useEffect } from 'react';
import UserPreferencesHeader from '../../UserPreferencesHeader';
import Button from '../../Button';
import { industry, industryNames } from '../../../../../../constans';
import {
  checkTiles,
  resetAllTiles,
  handleTileChange
} from '../../../../../../utils';

const IndustryBox = ({ isDay }) => {
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
    checkTiles(tiles, setTiles);
  });

  const renderIndustry = () => {
    return industry.map((ind, index) => (
      <Button
        key={index}
        companyIcon={ind[0]}
        companySpan={ind[1]}
        toggleTile={() => handleTileChange(ind[2], tiles, setTiles)}
        active={tiles[ind[2]]}
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
            ? 'preferences-heading grey'
            : 'preferences-heading preferences-headingNightMode grey'
        }
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
            toggleTile={() => resetAllTiles(industryNames, setTiles, tiles)}
            active={tiles['all']}
            isDay={isDay}
          />
          {renderIndustry()}
        </div>
      </div>
    </div>
  );
};

export default IndustryBox;
