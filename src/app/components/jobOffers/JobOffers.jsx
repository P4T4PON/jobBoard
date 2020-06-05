import React, { useState, Fragment } from 'react';
import './JobOffers.css';
import CityButton from '../additions/CityButton';
import MainContent from './mainContent/MainContent'
import CityFilters from './cityFilters/CityFilters'
import SidebarBox from './sidebarBox/SidebarBox'
import ContactUs from './contactUsBox/contactUs/ContactUs'
import { useSelector } from 'react-redux';

const JobOffers = () => {
  const isDay = useSelector(state => state.isDay);
  const [renderParent, setRenderParent] = useState(false)
  const [active, setActive] = useState({ 'all': true, 'junior': false, 'mid': false, 'senior': false })
  const [linkTo, setLinkTo] = useState(true);
  const [value, setValue] = useState([0, 50]);
  const [path, setPath] = useState('/');
  const [city, setCity] = useState('');
  const [technology, setTechnology] = useState('');
  const [coords, setCoords] = useState();
  const [location, setLocation] = useState(false);
  const [showCityFilters, setShowCityFilters] = useState(false);
  const [showSalaryFilters, setShowSalaryFilters] = useState(false);
  const [chosenCity, setChosenCity] = useState('')

  const changeActive = (newActive) => {
    setActive(newActive)
    setRenderParent(!renderParent)
  }

  const changeValue = (newValue) => {
    setValue(newValue)
  }

  const toggleLocation = (newLocation) => {
    setLocation(newLocation)
  }

  const toggleValue = (newValue) => {
    setValue(newValue);
  }

  const toggleAllCities = (newCity, newPath) => {
    setCity(newCity);
    setPath(newPath);
  };

  const toggleAllTechnologies = (newTechnology, newPath) => {
    setTechnology(newTechnology);
    setPath(newPath);
  };

  const toggleCoordinates = (newCoords) => {
    setCoords(newCoords)
  }

  const showCities = (showCities) => {
    setShowCityFilters(showCities)
    setCoords()
  }

  const choseCity = (newCity) => {
    setShowCityFilters(false)
    setChosenCity(newCity)
  }

  const hideCityFilters = () => {
    setShowCityFilters(false)
  }

  const hideSalaryFilters = () => {
    setShowSalaryFilters(false)
  }

  const showSalary = (otherFilters) => {
    setShowSalaryFilters(otherFilters)
  }

  const renderFilters = (filter) => {
    return filter.map((item, index) =>
      <CityButton city={item} key={index} choseCity={choseCity} chosenCity={chosenCity} isDay={isDay} />
    );
  };

  const clearOtherFilters = () => {
    setValue([0, 50])
    setActive({ 'all': true, 'junior': false, 'mid': false, 'senior': false })
  }

  return (
    <Fragment>
      <MainContent
        chosenCity={chosenCity}
        showCities={showCities}
        showCityFilters={showCityFilters}
        toggleAllTechnologies={toggleAllTechnologies}
        showSalary={showSalary}
        linkTo={linkTo}
        showSalaryFilters={showSalaryFilters} />

      {showCityFilters &&
        <CityFilters
          renderFilters={renderFilters}
          choseCity={choseCity}
          hideCityFilters={hideCityFilters} />}

      {showSalaryFilters &&
        <ContactUs
          hideSalaryFilters={hideSalaryFilters}
          changeValue={changeValue}
          toggleValue={toggleValue}
          value={value} active={active}
          changeActive={changeActive}
          clearOtherFilters={clearOtherFilters} />
      }

      <SidebarBox
        chosenCity={chosenCity}
        toggleAllCities={toggleAllCities}
        technology={technology}
        active={active}
        value={value}
        toggleLocation={toggleLocation}
        location={location}
        coords={coords}
        toggleCoordinates={toggleCoordinates} />
    </Fragment>
  );
};

export default JobOffers;


