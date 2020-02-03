import React, { useState } from 'react';

import './BrandStories.css';

const BrandStories = () => {
  const [showOtherCities, setShowOtherCities] = useState(false);
  const [cityWasAdded, setCityWasAdded] = useState(false);
  const [cityWasChosen, setCityWasChosen] = useState(false);

  let addedChosenCity = event => {
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
      document.querySelector('.other-cities').className += ' switch-right';
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
          .children[7].children[0].className.includes('all')
      ) {
        document.querySelector(
          '.filters-cities'
        ).children[7].children[0].className = 'city-button';
      }
    }

    if (!event.target.className.includes('all')) {
      event.target.className += ' all';
    }
  };

  let focusBrand = event => {
    console.log(event.target.parentElement.className);
    for (
      let i = 0;
      i < document.querySelector('.filters-brands').children.length;
      i++
    ) {
      if (
        !document
          .querySelector('.filters-brands')
          .children[i].className.includes('unAct')
      ) {
        document.querySelector('.filters-brands').children[i].className +=
          ' unAct';
      }
    }

    if (event.target.parentElement.className.includes('unAct')) {
      event.target.parentElement.classList.remove('unAct');
    } else if (event.target.className.includes('unAct')) {
      event.target.classList.remove('unAct');
    }
  };

  let focusAllBrands = event => {
    for (
      let i = 0;
      i < document.querySelector('.filters-brands').children.length;
      i++
    ) {
      if (
        document
          .querySelector('.filters-brands')
          .children[i].className.includes('unAct')
      ) {
        document
          .querySelector('.filters-brands')
          .children[i].classList.remove('unAct');
      }
    }
  };

  return (
    <div className="main-content">
      <div className="sub-header">
        <div className="filters">
          <div className="filters-cities">
            <div className="city-button all padd" onClick={focusCity}>
              All
            </div>
            <div className="city-button" onClick={focusCity}>
              Warszawa
            </div>
            <div className="city-button" onClick={focusCity}>
              Kraków
            </div>
            <div className="city-button" onClick={focusCity}>
              Wrocław
            </div>
            <div className="city-button" onClick={focusCity}>
              Poznań
            </div>
            <div className="city-button" onClick={focusCity}>
              Trójmiasto
            </div>

            <div className="city-button" onClick={focusCity}>
              World
            </div>
            <div className="added-city"></div>
            <i
              className="fas fa-ellipsis-h"
              id="moreCities-icon"
              onClick={() => setShowOtherCities(!showOtherCities)}
            ></i>
          </div>
          <div
            className={
              cityWasChosen && showOtherCities
                ? 'other-cities brands-ul  switch-right'
                : showOtherCities
                ? 'other-cities brands-ul'
                : 'other-cities brands-ul display-none'
            }
          >
            <ul
              className="otherCities-ul "
              onBlur={() => setShowOtherCities(false)}
            >
              <li onClick={addCity}>Białystok</li>
              <li onClick={addCity}>Bielsko-biała</li>
              <li onClick={addCity}>Bydgoszcz</li>
              <li onClick={addCity}>Częstochowa</li>
              <li onClick={addCity}>Gliwice</li>
              <li onClick={addCity}>Katowice</li>
              <li onClick={addCity}>Kielce</li>
              <li onClick={addCity}>Lublin</li>
              <li onClick={addCity}>Łódź</li>
              <li onClick={addCity}>Olsztyn</li>
              <li onClick={addCity}>Opole</li>
              <li onClick={addCity}>Toruń</li>
              <li onClick={addCity}>Rzeszów</li>
              <li onClick={addCity}>Szczecin</li>
              <li onClick={addCity}>Zielona Góra</li>
            </ul>
          </div>

          <div className="filters-brands">
            <div className="brand-button all padd" onClick={focusAllBrands}>
              All
            </div>
            <div
              className="brand-button redIcon brandHover brandRed"
              onClick={focusBrand}
            >
              <i className="fas fa-rocket"></i>
              <p>Startup</p>
            </div>
            <div
              className="brand-button yellowIcon brandHover brandYellow"
              onClick={focusBrand}
            >
              <i className="fas fa-flask"></i>
              <p>Software House</p>
            </div>
            <div
              className="brand-button greenIcon brandHover brandGreen"
              onClick={focusBrand}
            >
              <i className="fas fa-shopping-cart"></i>
              <p>E-commerance</p>
            </div>
            <div
              className="brand-button light-blueIcon brandHover brandBlue"
              onClick={focusBrand}
            >
              <i className="fas fa-hotel"></i>
              <p>Corporation</p>
            </div>
            <div
              className="brand-button dark-pinkIcon brandHover brandPink"
              onClick={focusBrand}
            >
              <i className="fas fa-desktop"></i>
              <p>Other</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandStories;
