import React from 'react';
import UserPreferencesHeader from '../../UserPreferencesHeader';
import Tile from '../../Tile';

const CompanyKindBox = () => {
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
        <div className="jobStatus-box">
          <Tile
            companyIcon={'far fa-check-square'}
            companySpan={"Doesn't matter"}
          />

          <Tile companyIcon={'fas fa-rocket'} companySpan={'Startup'} />

          <Tile companyIcon={'fas fa-flask'} companySpan={'Software house'} />

          <Tile
            companyIcon={'fas fa-shopping-cart'}
            companySpan={'E-commerce'}
          />

          <Tile companyIcon={'fas fa-hotel'} companySpan={'Corporation'} />
        </div>
      </div>
    </div>
  );
};

export default CompanyKindBox;
