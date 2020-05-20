import React, { useState, useEffect } from 'react';
import Tile from '../../Tile';
import UserPreferencesBox from '../../userPreferencesBox/UserPreferencesBox'
import { companyKind, companyKindNames } from '../../../../../../constans';
import {
  checkTiles,
  resetAllTiles,
  handleTileChange
} from '../../../../../../utils';

const CompanyKindBox = ({ isDay, toggleCompanyKind, userCompanyKind, kindError }) => {

  const [companyKindTempl, setCompanyKindTempl] = useState({
    all: false,
    startup: false,
    softwareHouse: false,
    ecommerce: false,
    corporation: false
  })

  useEffect(() => {
    checkTiles(companyKindTempl, toggleCompanyKind);
  });

  const renderCompanyKind = () => {
    return companyKind.map((kind, index) => (
      <Tile
        key={index}
        companyIcon={kind.icon}
        companySpan={kind.text}
        toggleTile={
          kind.kind === 'all'
            ? () => resetAllTiles(companyKindNames, toggleCompanyKind, companyKindTempl)
            : () => handleTileChange(kind.kind, companyKindTempl, toggleCompanyKind)
        }
        active={userCompanyKind[kind.kind]}
        isDay={isDay}
      />
    ));
  };

  return (
    <UserPreferencesBox
      color='red'
      iconClass={'fas fa-city'}
      title={'For what kind of company would you like to work for'}
      paragraph={'We want to find a company that trully fits you'}
    >
      <div className="preferencesJobStatus">
        <div className="jobStatusBox">{renderCompanyKind()}</div>
      </div>
      <div className='error' style={{ margin: '10px 0 0 0', fontSize: '18px' }}>{kindError}</div>
    </UserPreferencesBox>
  );
};

export default CompanyKindBox;
