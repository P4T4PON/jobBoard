import React, { useState, Fragment } from 'react';
import CityButton from '../../../additions/CityButton';
import AllCitiesButton from '../../../additions/AllCitiesButton';
import NightMode from '../../nightMode/NightMode';
import { otherCities, jobCities } from '../../../../../constans';
import { useSelector } from 'react-redux';

const Cities = ({ toggleAllCities, linkTo, brands }) => {
  const isDay = useSelector(state => state.isDay);

  const [showOtherCities, setShowOtherCities] = useState(false);
  const [cityWasChosen] = useState(false);
  const [showAddedCity, setShowAddedCity] = useState(false);
  const [cityName] = useState('');
  const [allCities, setAllCities] = useState(true);
  const [active, setActive] = useState(0);

  const toggleOtherCities = () => {
    return otherCities.map((city, index) => (
      <li
        key={index}
        onClick={() => {
          addCity(city);
        }}
      >
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
          toggleAllCities(city, '');
        }}
        active={active}
        allCities={allCities}
        city={city}
        isDay={isDay}
        linkTo={linkTo}
        brands={brands}
      />
    ));
  };

  const addCity = city => {
    document.querySelector('.added-city').firstChild.innerText = city;
    document
      .querySelector('.added-city')
      .firstChild.addEventListener('click', () => {
        toggleAllCities(city, '');
      });
    toggleAllCities(city, '');
    setShowOtherCities(false);
    setShowAddedCity(true);
    setAllCities(false);
    setActive(8);
  };

  return (
    <Fragment>
      <div className="filtersCities">
        <AllCitiesButton
          allCities={allCities}
          toggleActive={() => {
            setAllCities(true);
            toggleAllCities('', '');
          }}
          city={'All'}
          isDay={isDay}
          linkTo={linkTo}
        />

        {toggleJobCities()}

        <div
          className={showAddedCity ? 'added-city' : 'added-city display-none'}
          onBlur={() => setShowOtherCities(false)}
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
            isDay={isDay}
            linkTo={linkTo}
          />
        </div>

        <NightMode
          showOtherCities={showOtherCities}
          setShowOtherCities={setShowOtherCities}
        />
      </div>

      <div
        className={
          cityWasChosen && showOtherCities
            ? 'otherCities  moveRight'
            : showOtherCities
              ? 'otherCities'
              : 'otherCities display-none'
        }
      >
        <ul className="otherCitiesUl">{toggleOtherCities()}</ul>
      </div>
    </Fragment>
  );
};

export default Cities;
