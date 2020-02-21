import React, { useState, Fragment } from 'react';
import CityButton from '../../../additions/CityButton';
import AllCitiesButton from '../../../additions/AllCitiesButton';
import NightMode from '../../NightMode';
import { otherCities, jobCities } from '../../../../../constans';

const Cities = () => {
  const [nightMode, setNightMode] = useState(false);
  const [showOtherCities, setShowOtherCities] = useState(false);
  const [cityWasChosen] = useState(false);
  const [showAddedCity, setShowAddedCity] = useState(false);

  const [cityName] = useState('');
  const [allCities, setAllCities] = useState(true);
  const [active, setActive] = useState(0);

  const toggleOtherCities = () => {
    return otherCities.map((city, index) => (
      <li key={index} onClick={addCity}>
        {city}
      </li>
    ));
  };

  const toggleJobCities = () => {
    return jobCities.map((city, index) => (
      <CityButton
        key={index}
        cityId={index + 1}
        toggleActive={() => {
          setActive(index + 1);
          setAllCities(false);
        }}
        active={active}
        allCities={allCities}
        city={city}
      />
    ));
  };

  let addCity = event => {
    setShowOtherCities(false);
    setShowAddedCity(true);
    setAllCities(false);
    setActive(8);
    document.querySelector('.added-city').firstChild.innerText =
      event.target.innerText;
  };

  return (
    <Fragment>
      <div className="filters-cities">
        <AllCitiesButton
          allCities={allCities}
          toggleActive={() => setAllCities(true)}
          city={'All'}
        />

        {toggleJobCities()}

        <div
          className={showAddedCity ? 'added-city' : 'added-city display-none'}
        >
          <CityButton
            cityId={8}
            toggleActive={() => {
              setActive(8);
              setAllCities(false);
            }}
            active={active}
            allCities={allCities}
            city={cityName}
          />
        </div>

        <NightMode
          nightMode={nightMode}
          showOtherCities={showOtherCities}
          setNightMode={setNightMode}
          setShowOtherCities={setShowOtherCities}
        />
      </div>

      <div
        className={
          cityWasChosen && showOtherCities
            ? 'other-cities  move-right'
            : showOtherCities
            ? 'other-cities'
            : 'other-cities display-none'
        }
      >
        <ul className="otherCities-ul" onBlur={() => setShowOtherCities(false)}>
          {toggleOtherCities()}
        </ul>
      </div>
    </Fragment>
  );
};

export default Cities;
