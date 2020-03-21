import React, { useState } from 'react';
import UserPreferencesHeader from '../../UserPreferencesHeader';
import Input from '../../Input';
import { technologiesFab, technologiesFas } from '../../../../../../constans';

const TechnologiesBox = ({ isDay }) => {
  const [tech, setTech] = useState('');
  const [showTech, setShowTech] = useState(false);

  const searchInput = event => {
    setTech(event.target.value);
  };

  const renderTechnologiesFab = () => {
    return technologiesFab.map((technology, index) => (
      <li key={index}>
        <i className={`fab fa-${technology[1]}`}></i>
        {technology[0]}
      </li>
    ));
  };

  const renderTechnologiesFas = () => {
    return technologiesFas.map((technology, index) => (
      <li key={index}>
        <i className={`fas fa-${technology[1]}`}></i>
        {technology[0]}
      </li>
    ));
  };

  const focusInput = () => {
    document.querySelector('.tech-input').focus();
    setShowTech(true);
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
            ? 'preferences-heading pink'
            : 'preferences-heading preferences-headingNightMode pink'
        }
        className={'width-100'}
        iconClass={'fas fa-microchip'}
        title={'Choose your main technology (max 2)'}
        paragraph={'What is your speciality?'}
      />
      <div className="preferences-jobStatus">
        <div
          className={
            isDay
              ? 'inputStatus-box'
              : 'inputStatus-box inputStatus-boxNightMode'
          }
          onClick={focusInput}
        >
          <Input
            value={tech}
            name={'tech'}
            placeholder={'For example Javascript, Html...'}
            className={'tech-input'}
            searchInput={searchInput}
            hideInput={() => setShowTech(false)}
          />
        </div>
        <div className="cities-box">
          <div className={showTech ? 'cities' : 'cities display-none'}>
            <ul className="city-ul">
              {renderTechnologiesFab()} {renderTechnologiesFas()}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesBox;
