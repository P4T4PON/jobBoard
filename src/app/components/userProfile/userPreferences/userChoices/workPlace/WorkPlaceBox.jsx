import React, { useState } from 'react';
import UserPreferencesHeader from '../../UserPreferencesHeader';
import Input from '../../Input';
import { cities } from '../../../../../../constans';
const WorkPlaceBox = ({ isDay }) => {
  const [city, setCity] = useState('');
  const [showCities, setShowCities] = useState(false);

  const searchInput = event => {
    setCity(event.target.value);
  };

  const renderCities = () => {
    return cities.map((city, index) => <li key={index}>{city}</li>);
  };

  const focusInput = () => {
    document.querySelector('.city-input').focus();
    setShowCities(true);
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
            ? 'preferences-heading blue'
            : 'preferences-heading preferences-headingNightMode blue'
        }
        className={'width-100'}
        iconClass={'fas fa-map-marker-alt'}
        title={'Where would you like to work?'}
        paragraph={'Choose as many as you like.'}
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
            value={city}
            name={'city'}
            placeholder={'Select your city'}
            className={'city-input'}
            searchInput={searchInput}
            hideInput={() => setShowCities(false)}
          />
        </div>
        <div className="cities-box">
          <div className={showCities ? 'cities' : 'cities display-none'}>
            <ul className="city-ul">{renderCities()}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPlaceBox;
