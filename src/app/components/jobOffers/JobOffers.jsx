import React, { useState } from 'react';
import './JobOffers.css';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import CityButton from '../additions/CityButton';
import NightMode from './NightMode';
import TechButton from '../additions/TechButton';
import ExpLevel from './ExpLevel';
import { otherCities, techIcons } from '../../../constans';

const JobOffers = () => {
  const [showOtherCities, setShowOtherCities] = useState(false);
  const [cityWasAdded, setCityWasAdded] = useState(false);
  const [cityWasChosen, setCityWasChosen] = useState(false);
  const [nightMode, setNightMode] = useState(false);
  const [showExpLevel, setShowExpLevel] = useState(false);
  const [showSalary, setShowSalary] = useState(false);

  let [value, setValue] = useState({
    min: 0,
    max: 34
  });

  // za duzo linijek i kod sie powtarza z innymi zmiennymi (21-160)
  // mozna ul przypisac do zmiennej i po nim mapowac (224-243)
  // powinno byc w oddzielnym komponencie (247-505) (170-194)

  const toggleTechnologies = () => {
    return techIcons.map((tech, index) => (
      <TechButton
        iconClass={tech[0]}
        iconColor={tech[1]}
        focusTechnology={focusTechnology}
        paragraph={tech[2]}
      />
    ));
  };

  const toggleCities = () => {
    return otherCities.map((city, index) => (
      <li key={index} onClick={addCity}>
        {city}
      </li>
    ));
  };

  let addedChosenCity = () => {
    for (
      let i = 0;
      i < document.querySelector('.filters-cities').children.length;
      i++
    ) {
      if (
        document
          .querySelector('.filters-cities')
          .children[i].className.includes('all')
      ) {
        document.querySelector('.filters-cities').children[i].className =
          'city-button';
      }
    }
  };

  let addCity = event => {
    if (showOtherCities) {
      setShowOtherCities(false);
      setCityWasChosen(true);
      addedChosenCity();
      document.querySelector('.other-cities').className += ' move-right';
    }

    if (cityWasAdded === false) {
      setShowOtherCities(false);
      addedChosenCity();
      let new_city = document.createElement('div');
      new_city.className = 'city-button all';
      new_city.innerText = event.target.innerText;
      new_city.addEventListener('click', focusCity);
      document.querySelector('.added-city').appendChild(new_city);
      setCityWasAdded(true);
    }

    if (cityWasAdded) {
      setShowOtherCities(false);

      document.querySelector('.added-city').children[0].innerText =
        event.target.innerText;
      document.querySelector('.added-city').children[0].className =
        'city-button all';
    }
  };

  let focusCity = event => {
    setShowOtherCities(false);
    for (
      let i = 0;
      i < document.querySelector('.filters-cities').children.length;
      i++
    ) {
      if (
        document
          .querySelector('.filters-cities')
          .children[i].className.includes('all')
      ) {
        document.querySelector('.filters-cities').children[i].className =
          'city-button';
      }
    }

    if (document.querySelector('.added-city').children.length > 0) {
      if (
        document
          .querySelector('.filters-cities')
          .children[8].children[0].className.includes('all')
      ) {
        document.querySelector(
          '.filters-cities'
        ).children[8].children[0].className = 'city-button';
      }
    }

    if (!event.target.className.includes('all')) {
      event.target.className += ' all';
    }
  };

  let focusTechnology = event => {
    for (
      let i = 0;
      i < document.querySelector('.filters-technologies').children.length - 1;
      i++
    ) {
      if (
        !document
          .querySelector('.filters-technologies')
          .children[i].children[0].className.includes('unAct')
      ) {
        document.querySelector('.filters-technologies').children[
          i
        ].children[0].className += ' unAct';
      }
    }
    if (event.target.parentElement.className.includes('unAct')) {
      event.target.parentElement.classList.remove('unAct');
    } else if (event.target.className.includes('unAct')) {
      event.target.classList.remove('unAct');
    }
  };

  let focusAllTechnologies = () => {
    for (
      let i = 0;
      i < document.querySelector('.filters-technologies').children.length;
      i++
    ) {
      if (
        document
          .querySelector('.filters-technologies')
          .children[i].children[0].className.includes('unAct')
      ) {
        document
          .querySelector('.filters-technologies')
          .children[i].children[0].classList.remove('unAct');
      }
    }
  };

  let changeExpLevel = event => {
    if (event.target.innerText === 'All') {
      document.getElementById('expLevelButton').children[1].innerText =
        'Exp. level';
      if (document.getElementById('expLevelButton').className.includes('all')) {
        document.getElementById('expLevelButton').classList.remove('all');
      }
    } else {
      document.getElementById('expLevelButton').children[1].innerText =
        event.target.innerText;
      if (
        !document.getElementById('expLevelButton').className.includes('all')
      ) {
        document.getElementById('expLevelButton').className += ' all';
      }
    }

    setShowExpLevel(false);
  };

  return (
    <div className="main-content">
      <div className="sub-header">
        <div className="filters">
          <div className="filters-cities">
            <CityButton
              className={'all padd'}
              focusCity={focusCity}
              city={'All'}
            />

            <CityButton focusCity={focusCity} city={'Warszawa'} />

            <CityButton focusCity={focusCity} city={'Kraków'} />

            <CityButton focusCity={focusCity} city={'Wrocław'} />

            <CityButton focusCity={focusCity} city={'Poznań'} />

            <CityButton focusCity={focusCity} city={'Trójmiasto'} />

            <CityButton focusCity={focusCity} city={'Remote'} />

            <CityButton focusCity={focusCity} city={'World'} />

            <div className="added-city"></div>

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
            <ul
              className="otherCities-ul"
              onBlur={() => setShowOtherCities(false)}
            >
              {toggleCities()}
            </ul>
          </div>

          <div className="filters-technologies">
            <div className="tech-buttonBox">
              <div
                className="tech-button all padd"
                onClick={focusAllTechnologies}
              >
                All
              </div>
            </div>
            {toggleTechnologies()}

            <div className="other-filters">
              <div className="allSidebars webkit-right">
                <div
                  className={showSalary ? 'city-button padd0' : 'city-button'}
                  id="inputRangeButton"
                  onClick={() => setShowSalary(!showSalary)}
                >
                  <i className="fas fa-dollar-sign"></i>
                  <p>Salary</p>
                  <i className="fas fa-chevron-down"></i>
                </div>
                {showSalary ? (
                  <div className="salaryButton">
                    <InputRange
                      maxValue={34}
                      minValue={0}
                      value={value}
                      onChange={value => setValue(value)}
                      formatLabel={value => `${value} k`}
                      allowSameValues={true}
                    />
                  </div>
                ) : null}
              </div>
              <ExpLevel
                changeExpLevel={changeExpLevel}
                showExpLevel={showExpLevel}
                setShowExpLevel={setShowExpLevel}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOffers;
