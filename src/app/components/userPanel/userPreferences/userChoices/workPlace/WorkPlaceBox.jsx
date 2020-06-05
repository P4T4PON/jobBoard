import React, { useState, useEffect } from 'react';
import Input from '../../Input';
import UserPreferencesBox from '../../userPreferencesBox/UserPreferencesBox'
import CitiesList from './citiesList/CitiesList'
import ChosenInput from './chosenInput/ChosenInput'

const WorkPlaceBox = ({ isDay, userCities, searchCities, cities, toggleCities, cityError }) => {
  const [city, setCity] = useState('')
  const [showCities, setShowCities] = useState(false);

  useEffect(() => {
    cities.sort()
  }, [])

  const focusInput = () => {
    document.querySelector('.city-input').focus();
    setShowCities(true);
  };

  const searchInput = (event) => {
    setCity(event.target.value)
  }

  const removeCity = (city) => {
    if (!cities.includes(city)) {
      cities.push(city)
      filterValues(city)
      cities.sort()
    }
  }

  const filterValues = (chosenCity) => {
    for (let i = 0; i < userCities.length; i++) {
      if (userCities[i] === chosenCity) {
        userCities.splice(i, 1)
      }
    }
  }

  const renderChosenCities = () => {
    return (userCities.map((city, index) => <ChosenInput key={index} city={city} removeCity={removeCity} />))
  }

  return (
    <UserPreferencesBox
      iconClass={'fas fa-map-marker-alt'}
      title={'Where would you like to work?'}
      paragraph={'Choose as many as you like.'}
      color={'blue'}>
      <div className="preferencesJobStatus">
        <div
          className={
            isDay
              ? 'inputStatusBox'
              : 'inputStatusBox inputStatusBoxNightMode'
          }
          onClick={focusInput}
        >
          {renderChosenCities()}
          <Input
            value={city}
            name={'city'}
            placeholder={'Select your city'}
            className={'city-input'}
            searchInput={searchInput}
            hideInput={() => setShowCities(false)}
          />
        </div>
        <CitiesList city={city} chosenCities={userCities} showCities={showCities} cities={cities} searchCities={searchCities} toggleCities={toggleCities} />
      </div>
      <div className='error' style={{ margin: '10px 0 0 0', fontSize: '18px' }}>{cityError}</div>
    </UserPreferencesBox>
  );
};

export default WorkPlaceBox;
