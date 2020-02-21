import React from 'react';
import UserPreferencesHeader from '../../UserPreferencesHeader';
import Button from '../../Button';

const IndustryBox = () => {
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
          <Button companySpan={"Doesn't matter"} />

          <Button companyIcon={'fas fa-dollar-sign'} companySpan={'Fintech'} />

          <Button companyIcon={'fas fa-cube'} companySpan={'Bloackchain'} />

          <Button
            companyIcon={'fas fa-shopping-cart'}
            companySpan={'E-commerce'}
          />

          <Button companyIcon={'far fa-heart'} companySpan={'Medicine'} />

          <Button companyIcon={'fas fa-medal'} companySpan={'Military'} />

          <Button
            companyIcon={'fas fa-plane-departure'}
            companySpan={'Travel'}
          />

          <Button
            companyIcon={'fas fa-cart-arrow-down'}
            companySpan={'Martech'}
          />

          <Button companyIcon={'fas fa-user-md'} companySpan={'IoT'} />

          <Button companyIcon={'fas fa-truck'} companySpan={'Logistic'} />

          <Button companyIcon={'fas fa-seedling'} companySpan={'Beauty'} />

          <Button companyIcon={'fas fa-laptop'} companySpan={'Other'} />
        </div>
      </div>
    </div>
  );
};

export default IndustryBox;
