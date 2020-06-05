import React, { useEffect, useState } from 'react';
import Tile from '../../Tile';
import UserPreferencesBox from '../../userPreferencesBox/UserPreferencesBox'
import { companyStage, companyStageNames } from '../../../../../../constans';
import {
  checkTiles,
  resetAllTiles,
  handleTileChange
} from '../../../../../../utils';

const CompanyStageBox = ({ isDay, toggleCompanyStage, userCompanyStage, stageError }) => {

  const [test, setTest] = useState({
    all: false,
    earlyStage: false,
    growthStage: false,
    estabilished: false,
    corporation: false
  })

  useEffect(() => {
    checkTiles(test, toggleCompanyStage);
  });

  const renderCompanyStage = () => {
    return companyStage.map((stage, index) => (
      <Tile
        key={index}
        companyIcon={stage.icon}
        companySpan={stage.text}
        toggleTile={
          stage.stage === 'all'
            ? () => resetAllTiles(companyStageNames, toggleCompanyStage, test)
            : () => handleTileChange(stage.stage, test, toggleCompanyStage)
        }
        active={userCompanyStage[stage.stage]}
        isDay={isDay}
      />
    ));
  };

  return (
    <UserPreferencesBox
      color={'orange'}
      iconClass={'fas fa-user-friends'}
      title={'What stage should the company be in?'}
      paragraph={'Choose as many as you like.'}
    >
      <div className="jobStatusBox">{renderCompanyStage()}</div>
      <div className='error' style={{ margin: '10px 0 0 0', fontSize: '18px' }}>{stageError}</div>
    </UserPreferencesBox>
  );
};

export default CompanyStageBox;
