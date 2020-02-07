import React, { useState } from 'react';
import './JobOffers.css';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

const JobOffers = () => {
  const [showOtherCities, setShowOtherCities] = useState(false);
  const [cityWasAdded, setCityWasAdded] = useState(false);
  const [cityWasChosen, setCityWasChosen] = useState(false);
  const [nightMode, setNightMode] = useState(false);
  const [showExpLevel, setShowExpLevel] = useState(false);
  const [showSalary, setShowSalary] = useState(false);
  //let?
  let [value, setValue] = useState({
    min: 0,
    max: 34
  });

  //jest to ogrmony komponent i mozna go podzielic na znacznie mniejsze i powydzielac je w odpowiednie foldery
  // zastanow sie jak go mozna podzielic

  // za duzo linijek i kod sie powtarza z innymi zmiennymi (21-160)
  // mozna ul przypisac do zmiennej i po nim mapowac (224-243)
  // powinno byc w oddzielnym komponencie (247-505) (170-194)

  //  TODO: event parametr nieuzywany, funkcja let i lapiesz elementy czystym js i po nich iterujesz
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
  //todo: let i lapanie po js + przypisywanie klas czystym js
  let addCity = event => {
    if (showOtherCities) {
      setShowOtherCities(false);
      setCityWasChosen(true);
      addedChosenCity();
      document.querySelector('.other-cities').className += ' move-right';
    }
    // tu rowniez lapanie elementow a nawet tworzenie i injectowanie pure js'em + appendowanie - react to to nie jest :)
    if (!cityWasAdded === false) {
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

  let focusAllTechnologies = event => {
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
  //todo: duza powtarzalnosc kodu, mozna z tego powydzielac male komponenty a przy uzyciu kilku mapować
  //todo: pozamykaj puste w środku tagi html, aby były self-closing
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
              Remote
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
            <div className="night-mode">
              <i className="fas fa-sun" onClick={() => setNightMode(false)}></i>

              <div
                className="change-mode"
                onClick={() => setNightMode(!nightMode)}
              >
                <div
                  className={
                    nightMode
                      ? 'change-button change-buttonActive'
                      : 'change-button'
                  }
                ></div>
              </div>
              <i className="fas fa-moon" onClick={() => setNightMode(true)}></i>
            </div>
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

          <div className="filters-technologies">
            <div className="tech-buttonBox">
              <div
                className="tech-button all padd"
                onClick={focusAllTechnologies}
              >
                All
              </div>
            </div>

            <div className="tech-buttonBox">
              <div
                className="tech-button icon-self yellowIcon bg-poz0"
                onClick={focusTechnology}
              >
                <i className="fab fa-js "></i>
              </div>
              <div className="centerNote">
                <p>Js</p>
              </div>
            </div>

            <div className="tech-buttonBox">
              <div
                className="tech-button orangeIcon icon-self bg-poz0"
                onClick={focusTechnology}
              >
                <i className="fab fa-html5 "></i>
              </div>
              <div className="centerNote">
                <p>HTML</p>
              </div>
            </div>

            <div className="tech-buttonBox">
              <div
                className="tech-button blueIcon icon-self bg-poz0"
                onClick={focusTechnology}
              >
                <i className="fab fa-php "></i>
              </div>
              <div className="centerNote">
                <p>PHP</p>
              </div>
            </div>

            <div className="tech-buttonBox">
              <div
                className="tech-button light-redIcon icon-self bg-poz0"
                onClick={focusTechnology}
              >
                <i className="fas fa-gem "></i>
              </div>
              <div className="centerNote">
                <p>Ruby</p>
              </div>
            </div>

            <div className="tech-buttonBox">
              <div
                className="tech-button dark-blueIcon icon-self bg-poz0"
                onClick={focusTechnology}
              >
                <i className="fab fa-python "></i>
              </div>
              <div className="centerNote">
                <p>Python</p>
              </div>
            </div>

            <div className="tech-buttonBox">
              <div
                className="tech-button pinkIcon icon-self bg-poz0"
                onClick={focusTechnology}
              >
                <i className="fab fa-java "></i>
              </div>
              <div className="centerNote">
                <p>Java</p>
              </div>
            </div>

            <div className="tech-buttonBox">
              <div
                className="tech-button light-blueIcon icon-self bg-poz0"
                onClick={focusTechnology}
              >
                <i className="fas fa-bacon "></i>
              </div>
              <div className="centerNote">
                <p>.NET</p>
              </div>
            </div>
            {/*powtarzanie kodu - moze to byc osobny komponent kotry moze byc zmapowany*/}
            <div className="tech-buttonBox">
              <div
                className="tech-button light-redIcon icon-self bg-poz0"
                onClick={focusTechnology}
              >
                <i className="fab fa-stripe-s "></i>
              </div>
              <div className="centerNote">
                <p>Scala</p>
              </div>
            </div>

            <div className="tech-buttonBox">
              <div
                className="tech-button  greenIcon icon-self bg-poz0"
                onClick={focusTechnology}
              >
                <i className="fab fa-cuttlefish "></i>
              </div>
              <div className="centerNote">
                <p>C</p>
              </div>
            </div>

            <div className="tech-buttonBox">
              <div
                className="tech-button bordIcon icon-self bg-poz0"
                onClick={focusTechnology}
              >
                {/*todo: self closing tagi w i*/}
                <i className="fas fa-mobile-alt "></i>
              </div>
              <div className="centerNote">
                <p>Mobile</p>
              </div>
            </div>

            <div className="tech-buttonBox">
              <div
                className="tech-button light-greenIcon icon-self bg-poz0"
                onClick={focusTechnology}
              >
                <i className="fas fa-search "></i>
              </div>
              <div className="centerNote">
                <p>Testing</p>
              </div>
            </div>

            <div className="tech-buttonBox">
              <div
                className="tech-button blue-blueIcon icon-self bg-poz0"
                onClick={focusTechnology}
              >
                <i className="fab fa-dev "></i>
              </div>
              <div className="centerNote">
                <p> Dev/Ops</p>
              </div>
            </div>

            <div className="tech-buttonBox">
              <div
                className="tech-button dark-yellowIcon icon-self bg-poz0"
                onClick={focusTechnology}
              >
                <i className="fas fa-magic "></i>
              </div>
              <div className="centerNote">
                <p>UX/UI</p>
              </div>
            </div>

            <div className="tech-buttonBox">
              <div
                className="tech-button green-blueIcon icon-self bg-poz0"
                onClick={focusTechnology}
              >
                <i className="fas fa-user "></i>
              </div>
              <div className="centerNote">
                <p>PM</p>
              </div>
            </div>

            <div className="tech-buttonBox">
              <div
                className="tech-button light-pinkIcon icon-self bg-poz0"
                onClick={focusTechnology}
              >
                <i className="fas fa-gamepad "></i>
              </div>
              <div className="centerNote">
                <p>Game</p>
              </div>
            </div>

            <div className="tech-buttonBox">
              <div
                className="tech-button purpleIcon icon-self bg-poz0"
                onClick={focusTechnology}
              >
                <i className="fab fa-bitcoin "></i>
              </div>
              <div className="centerNote">
                <p>Blockchain</p>
              </div>
            </div>

            <div className="tech-buttonBox">
              <div
                className="tech-button dark-darkBlueIcon icon-self bg-poz0"
                onClick={focusTechnology}
              >
                <i className="fas fa-shield-alt "></i>
              </div>
              <div className="centerNote">
                <p>Security</p>
              </div>
            </div>

            <div className="tech-buttonBox">
              <div
                className="tech-button blue-greenIcon icon-self bg-poz0"
                onClick={focusTechnology}
              >
                <i className="fas fa-database "></i>
              </div>
              <div className="centerNote">
                <p>Data</p>
              </div>
            </div>
            <div className="tech-buttonBox">
              <div
                className="tech-button lighter-blueIcon icon-self bg-poz0"
                onClick={focusTechnology}
              >
                <i className="fas fa-hippo "></i>
              </div>
              <div className="centerNote">
                <p>Golang</p>
              </div>
            </div>
            <div className="tech-buttonBox">
              <div
                className="tech-button darker-blueIcon icon-self bg-poz0"
                onClick={focusTechnology}
              >
                <i className="fab fa-stackpath"></i>
              </div>
              <div className="centerNote">
                <p>SAP</p>
              </div>
            </div>
            <div className="tech-buttonBox">
              <div
                className="tech-button dark-pinkIcon icon-self bg-poz0"
                onClick={focusTechnology}
              >
                <i className="fas fa-desktop "></i>
              </div>
              <div className="centerNote">
                <p>Other</p>
              </div>
            </div>
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
              <div className="allSidebars">
                <div
                  className="city-button min-width120"
                  id="expLevelButton"
                  onClick={() => setShowExpLevel(!showExpLevel)}
                >
                  <i className="fas fa-chart-line"></i>
                  <p>Exp. level</p>
                  <i className="fas fa-chevron-down"></i>
                </div>
                /* nie nic mowiace nazwy klas, powtarzanie sie li*/
                <div className={showExpLevel ? 'expLevel op1' : 'expLevel op0'}>
                  <ul className={showExpLevel ? 'op1' : 'op0'}>
                    <li onClick={changeExpLevel}>All</li>
                    <li onClick={changeExpLevel}>Junior</li>
                    <li onClick={changeExpLevel}>Mid</li>
                    <li onClick={changeExpLevel}>Senior</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOffers;
