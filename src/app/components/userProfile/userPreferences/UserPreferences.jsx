import React, { useState, Fragment } from 'react';
import PrefBox from './PrefBox';
import { JobStatus } from './JobStatus';
import Input from './Input';
import Tile from './Tile';
import ResetTile from './ResetTile';
import Button from './Button';
import ResetButton from './ResetButton';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import UserPanel from '../UserPanel';
import {
  cities,
  technologiesFab,
  technologiesFas,
  skills
} from '../../../../constans';

import './UserPreferences.css';

const UserPreferences = () => {
  const [panelActive, setPanelActive] = useState(3);
  const [showCities, setShowCities] = useState(false);
  const [showTechnologies, setShowTechnologies] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [city, setCity] = useState('');
  const [tech, setTech] = useState('');
  const [skill, setSkill] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [statusValue, setStatusValue] = useState('');
  const [remoteJob, setRemoteJob] = useState('');
  let [value, setValue] = useState({
    min: 0,
    max: 50
  });

  const [companyStage, setCompanyStage] = useState(0);
  const [companyStageStatus, setCompanyStageStatus] = useState(false);

  const [companyKind, setCompanyKind] = useState(0);
  const [companyKindStatus, setCompanyKindStatus] = useState(false);

  const [industry, setIndustry] = useState(0);
  const [industryStatus, setIndustryStatus] = useState(false);

  const [experiance, setExperiance] = useState(0);
  const [experianceStatus, setExperianceStatus] = useState(false);

  const [employment, setEmployment] = useState(0);
  const [employmentStatus, setEmploymentStatus] = useState(false);

  let renderCities = () => {
    return cities.map((city, index) => (
      <li onMouseDown={hideCity} key={index}>
        {city}
      </li>
    ));
  };

  const renderTechnologiesFab = () => {
    return technologiesFab.map((technology, index) => (
      <li onMouseDown={hideCity} key={index}>
        <i className={`fab fa-${technology[1]}`}></i>
        {technology[0]}
      </li>
    ));
  };

  const renderTechnologiesFas = () => {
    return technologiesFas.map((technology, index) => (
      <li onMouseDown={hideCity} key={index}>
        <i className={`fas fa-${technology[1]}`}></i>
        {technology[0]}
      </li>
    ));
  };

  const renderSkills = () => {
    return skills.map((skill, index) => (
      <li onMouseDown={hideCity} key={index}>
        {skill}
      </li>
    ));
  };

  const jobStatusActive = event => {
    const job_box = document.querySelector('.jobStatus-box');
    for (let i = 0; i < job_box.children.length; i++) {
      job_box.children[i].children[0].className = 'jobStatus-change mr-20';
    }
    if (event.target.className === 'jobStatus-change mr-20') {
      event.target.className = 'jobStatus-change mr-20 border-pink';
    } else if (
      event.target.parentElement.className === 'jobStatus-change mr-20'
    ) {
      event.target.parentElement.className =
        'jobStatus-change mr-20 border-pink';
    }
  };

  const hideCity = event => {
    if (event.target.className === '') {
      event.target.className += ' display-none';
    } else {
      event.target.parentElement.className += 'display-none';
    }
  };

  const retryChosenItem = event => {
    event.target.parentElement.parentElement.remove();
    for (
      let i = 0;
      i < document.querySelector(`.${inputValue}-ul`).children.length;
      i++
    ) {
      if (
        event.target.parentElement.parentElement.innerText ===
        document.querySelector(`.${inputValue}-ul`).children[i].innerText
      ) {
        document.querySelector(`.${inputValue}-ul`).children[i].className = '';
      }
    }
  };

  const toggleSetChosenItem = event => {
    const my_item = document.createElement('div');
    const chosen_item = event.target.innerHTML;
    const icon =
      '<div class="icon-box"><i class="fas fa-times-circle"></i></div>';
    my_item.className = 'input-chosen';
    my_item.innerHTML = chosen_item;
    my_item.innerHTML += icon;
    {
      inputValue === 'tech'
        ? my_item.children[1].addEventListener('click', retryChosenItem)
        : my_item.children[0].addEventListener('click', retryChosenItem);
    }

    document.querySelector(`#${inputValue}`).appendChild(my_item);
  };

  const searchInput = event => {
    event.preventDefault();
    if (inputValue === 'city') {
      setCity(event.target.value);
    } else if (inputValue === 'tech') {
      setTech(event.target.value);
    } else if (inputValue === 'skill') {
      setSkill(event.target.value);
    }

    for (
      let i = 0;
      i < document.querySelector(`.${inputValue}-ul`).children.length;
      i++
    ) {
      if (
        !document
          .querySelector(`.${inputValue}-ul`)
          .children[i].innerText.toLowerCase()
          .includes(event.target.value.toLowerCase())
      ) {
        document.querySelector(`.${inputValue}-ul`).children[i].className =
          'display-none';
      }
      if (
        document
          .querySelector(`.${inputValue}-ul`)
          .children[i].innerText.toLowerCase()
          .includes(event.target.value.toLowerCase()) &&
        document.querySelector(`.${inputValue}-ul`).children[i].className ===
          'display-none'
      ) {
        if (document.querySelector(`#${inputValue}`).children.length < 1) {
          document.querySelector(`.${inputValue}-ul`).children[i].className =
            '';
        } else {
          for (
            let j = 0;
            j < document.querySelector(`#${inputValue}`).children.length;
            j++
          ) {
            if (
              document
                .querySelector(`#${inputValue}`)
                .children[j].innerText.toLowerCase() ===
              document
                .querySelector(`.${inputValue}-ul`)
                .children[i].innerText.toLowerCase()
            ) {
              document.querySelector(`.${inputValue}-ul`).children[
                i
              ].className = 'display-none';
            } else {
              document.querySelector(`.${inputValue}-ul`).children[
                i
              ].className = '';
            }
          }
          for (
            let k = 0;
            k < document.querySelector(`#${inputValue}`).children.length;
            k++
          ) {
            if (
              document
                .querySelector(`#${inputValue}`)
                .children[k].innerText.toLowerCase() ===
              document
                .querySelector(`.${inputValue}-ul`)
                .children[i].innerText.toLowerCase()
            ) {
              document.querySelector(`.${inputValue}-ul`).children[
                i
              ].className = 'display-none';
            }
          }
        }
      }
    }
  };

  const focusInput = () => {
    document.querySelector('.city-input').focus();
    setInputValue('city');
    setShowCities(true);
  };

  const focusTechInput = () => {
    document.querySelector('.tech-input').focus();
    setInputValue('tech');
    setShowTechnologies(true);
  };

  const focusSkillInput = () => {
    document.querySelector('.skill-input').focus();
    setInputValue('skill');
    setShowSkills(true);
  };
  //1. najedz myszką na 'setCities' i sam Ci podpowie, ze zadeklarowales setCities i nigdzie tego nie uzywasz, wiec po co state?
  //2. zobacz, ze wszedzie potwarzasz to samo, a malo tego w state trzymasz po prostu fragment z tablicą identycznych elementów
  // w których nie zmienia się nic oprócz nazwy miasta
  //3. wgl odpal sobie terminal i zobacz, ile podpowiedzi daje Ci sam eslint (wali warningami o zmiennyh ktore tworzysz i ktorych nie uzywasz wgl)
  //4. jezeli nigdzie nie nadpisujesz zmiennej to nie uzywaj letów tylko constów i to się tyczy większości projektu
  // poczytaj o tym : https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75

  const assignValue = event => {
    if (event.target.parentElement.parentElement.id !== '') {
      setStatusValue(event.target.parentElement.parentElement.id);
    } else {
      setStatusValue(event.target.parentElement.parentElement.parentElement.id);
    }
  };

  const clearTiles = () => {
    if (statusValue === 'Status') {
      setCompanyStageStatus(false);
      setCompanyStage(0);
    } else if (statusValue === 'Kind') {
      setCompanyKindStatus(false);
      setCompanyKind(0);
    } else if (statusValue === 'Industry') {
      setIndustryStatus(false);
      setIndustry(0);
    } else if (statusValue === 'Experiance') {
      setExperianceStatus(false);
      setExperiance(0);
    } else if (statusValue === 'Employment') {
      setEmploymentStatus(false);
      setEmployment(0);
    }
  };

  const var1 = () => {
    if (statusValue === 'Status') {
      setCompanyStage(companyStage - 1);
      if (companyStage === 1) {
        setCompanyStageStatus(false);
      }
    } else if (statusValue === 'Kind') {
      setCompanyKind(companyKind - 1);
      if (companyKind === 1) {
        setCompanyKindStatus(false);
      }
    } else if (statusValue === 'Industry') {
      setIndustry(industry - 1);
      if (industry === 1) {
        setIndustryStatus(false);
      }
    } else if (statusValue === 'Experiance') {
      setExperiance(experiance - 1);
      if (experiance === 1) {
        setExperianceStatus(false);
      }
    } else if (statusValue === 'Employment') {
      setEmployment(employment - 1);
      if (employment === 1) {
        setEmploymentStatus(false);
      }
    }
  };

  const var2 = () => {
    if (statusValue === 'Status') {
      setCompanyStage(companyStage + 1);
      setCompanyStageStatus(true);
    } else if (statusValue === 'Kind') {
      setCompanyKind(companyKind + 1);
      setCompanyKindStatus(true);
    } else if (statusValue === 'Industry') {
      setIndustry(industry + 1);
      setIndustryStatus(true);
    } else if (statusValue === 'Experiance') {
      setExperiance(experiance + 1);
      setExperianceStatus(true);
    } else if (statusValue === 'Employment') {
      setEmployment(employment + 1);
      setEmploymentStatus(true);
    }
  };

  const toggleTiles = event => {
    const etpec0cn = event.target.parentElement.children[0].className;
    const etpecn = event.target.parentElement.className;
    if (
      etpec0cn === 'jobStatus-change company border-pink' ||
      etpecn === 'jobStatus-change company border-pink' ||
      etpec0cn === 'jobStatus-button border-pink' ||
      etpecn === 'jobStatus-button border-pink'
    ) {
      var1();
    } else if (
      etpec0cn === 'jobStatus-change company' ||
      etpecn === 'jobStatus-change company' ||
      etpec0cn === 'jobStatus-button' ||
      etpecn === 'jobStatus-button'
    ) {
      var2();
    }
  };

  return (
    <div className="userLogin-content vw-99">
      <UserPanel active={panelActive} inputValue={statusValue} />
      <div className="preferences">
        <div className="preferences-content">
          <h1>Preferences</h1>

          <form>
            <PrefBox
              heading={'preferences-heading'}
              className={'jobStatus-box'}
              iconClass={'far fa-eye'}
              title={"Ok, let's start! What is your status in job search?"}
              paragraph={
                'Let us know if we should look for the best job on the market for you.'
              }
              content={
                <Fragment>
                  <div onClick={jobStatusActive}>
                    <JobStatus
                      icon={'far fa-file-alt'}
                      span1={'Actively looking '}
                      span2={'for a job'}
                    />
                  </div>

                  <div onClick={jobStatusActive}>
                    <JobStatus
                      icon={'fas fa-envelope-open-text'}
                      span1={'Open '}
                      span2={'for proposals'}
                    />
                  </div>

                  <div onClick={jobStatusActive}>
                    <JobStatus
                      icon={'fas fa-unlock-alt'}
                      span1={'Not open '}
                      span2={'for proposals'}
                    />
                  </div>
                </Fragment>
              }
            />
          </form>

          <form>
            <PrefBox
              heading={'preferences-heading blue'}
              className={'width-100'}
              iconClass={'fas fa-map-marker-alt'}
              title={'Where would you like to work?'}
              paragraph={'Choose as many as you like.'}
              content={
                <Fragment>
                  <div
                    className="inputStatus-box"
                    onClick={focusInput}
                    onBlur={() => {
                      setShowCities(false);
                    }}
                  >
                    <Input
                      value={city}
                      name={'city'}
                      placeholder={'Select your city'}
                      className={'city-input'}
                      id={'city'}
                      foo={searchInput}
                    />
                  </div>
                  <div className="cities-box">
                    <div
                      className={showCities ? 'cities' : 'cities display-none'}
                    >
                      <ul onMouseDown={toggleSetChosenItem} className="city-ul">
                        {renderCities()}
                      </ul>
                    </div>
                  </div>
                </Fragment>
              }
            />
          </form>

          <form>
            <PrefBox
              heading={'preferences-heading light-blue'}
              className={'display-flex'}
              iconClass={'fas fa-umbrella-beach'}
              title={'Are you willing to work remotely?'}
              paragraph={'We will try to find you an attractive remote job.'}
              content={
                <Fragment>
                  <div
                    className={
                      remoteJob === 'yes'
                        ? 'jobStatus-button mrg-right border-pink '
                        : 'jobStatus-button mrg-right'
                    }
                    onClick={() => setRemoteJob('yes')}
                  >
                    Yes
                  </div>
                  <div
                    className={
                      remoteJob === 'no'
                        ? 'jobStatus-button border-pink'
                        : 'jobStatus-button '
                    }
                    onClick={() => setRemoteJob('no')}
                  >
                    No
                  </div>
                </Fragment>
              }
            />
          </form>

          <form>
            <PrefBox
              heading={'preferences-heading orange'}
              className={''}
              iconClass={'fas fa-user-friends'}
              title={'What stage should the company be in?'}
              paragraph={'Choose as many as you like.'}
              content={
                <Fragment>
                  <div
                    className="jobStatus-box"
                    onMouseDown={assignValue}
                    id="Status"
                  >
                    <div className="z-index100 a" onClick={clearTiles}>
                      <ResetTile
                        CompanyIcon={'far fa-check-square'}
                        CompanySpan={"Doesn't matter"}
                        CompanyActive={companyStageStatus}
                      />
                    </div>

                    <div className="z-index100 a" onClick={toggleTiles}>
                      <Tile
                        CompanyIcon={'fas fa-home'}
                        CompanySpan={'Early stage(0-30)'}
                        CompanyActive={companyStageStatus}
                      />
                    </div>

                    <div className="z-index100 a" onClick={toggleTiles}>
                      <Tile
                        CompanyIcon={'far fa-building'}
                        CompanySpan={'Growth stage (30-100)'}
                        CompanyActive={companyStageStatus}
                      />
                    </div>

                    <div className="z-index100 a" onClick={toggleTiles}>
                      <Tile
                        CompanyIcon={'fas fa-city'}
                        CompanySpan={'Estabilished(100-250)'}
                        CompanyActive={companyStageStatus}
                      />
                    </div>

                    <div className="z-index100 a" onClick={toggleTiles}>
                      <Tile
                        CompanyIcon={'fas fa-university'}
                        CompanySpan={'Corporation(250+)'}
                        CompanyActive={companyStageStatus}
                      />
                    </div>
                  </div>
                </Fragment>
              }
            />
          </form>

          <form>
            <PrefBox
              heading={'preferences-heading red'}
              className={''}
              iconClass={'fas fa-city'}
              title={'For what kind of company would you like to work for'}
              paragraph={'We want to find a company that trully fits you'}
              content={
                <Fragment>
                  <div
                    className="jobStatus-box"
                    id="Kind"
                    onMouseDown={assignValue}
                  >
                    <div className="z-index100" onClick={clearTiles}>
                      <ResetTile
                        CompanyIcon={'far fa-check-square'}
                        CompanySpan={"Doesn't matter"}
                        CompanyActive={companyKindStatus}
                      />
                    </div>

                    <div className="z-index100" onClick={toggleTiles}>
                      <Tile
                        CompanyIcon={'fas fa-rocket'}
                        CompanySpan={'Startup'}
                        CompanyActive={companyKindStatus}
                      />
                    </div>

                    <div className="z-index100" onClick={toggleTiles}>
                      <Tile
                        CompanyIcon={'fas fa-flask'}
                        CompanySpan={'Software house'}
                        CompanyActive={companyKindStatus}
                      />
                    </div>

                    <div className="z-index100" onClick={toggleTiles}>
                      <Tile
                        CompanyIcon={'fas fa-shopping-cart'}
                        CompanySpan={'E-commerce'}
                        CompanyActive={companyKindStatus}
                      />
                    </div>

                    <div className="z-index100" onClick={toggleTiles}>
                      <Tile
                        CompanyIcon={'fas fa-hotel'}
                        CompanySpan={'Corporation'}
                        CompanyActive={companyKindStatus}
                      />
                    </div>
                  </div>
                </Fragment>
              }
            />
          </form>

          <form>
            <PrefBox
              heading={'preferences-heading grey'}
              className={''}
              iconClass={'far fa-building'}
              title={'Projects in which industry would you like to develop?'}
              paragraph={
                'We really intend to match the project to you Choose as many as you like.'
              }
              content={
                <Fragment>
                  <div
                    className="jobStatus-box"
                    id="Industry"
                    onMouseDown={assignValue}
                  >
                    <div className="btn-icon" onClick={clearTiles}>
                      <ResetButton
                        CompanySpan={"Doesn't matter"}
                        CompanyActive={industryStatus}
                      />
                    </div>

                    <div className="btn-icon grey" onClick={toggleTiles}>
                      <Button
                        CompanyIcon={'fas fa-dollar-sign'}
                        CompanySpan={'Fintech'}
                        CompanyActive={industryStatus}
                      />
                    </div>

                    <div className="btn-icon grey" onClick={toggleTiles}>
                      <Button
                        CompanyIcon={'fas fa-cube'}
                        CompanySpan={'Bloackchain'}
                        CompanyActive={industryStatus}
                      />
                    </div>

                    <div className="btn-icon grey" onClick={toggleTiles}>
                      <Button
                        CompanyIcon={'fas fa-shopping-cart'}
                        CompanySpan={'E-commerce'}
                        CompanyActive={industryStatus}
                      />
                    </div>

                    <div className="btn-icon grey" onClick={toggleTiles}>
                      <Button
                        CompanyIcon={'far fa-heart'}
                        CompanySpan={'Medicine'}
                        CompanyActive={industryStatus}
                      />
                    </div>

                    <div className="btn-icon grey" onClick={toggleTiles}>
                      <Button
                        CompanyIcon={'fas fa-medal'}
                        CompanySpan={'Military'}
                        CompanyActive={industryStatus}
                      />
                    </div>

                    <div className="btn-icon grey" onClick={toggleTiles}>
                      <Button
                        CompanyIcon={'fas fa-plane-departure'}
                        CompanySpan={'Travel'}
                        CompanyActive={industryStatus}
                      />
                    </div>

                    <div className="btn-icon grey" onClick={toggleTiles}>
                      <Button
                        CompanyIcon={'fas fa-cart-arrow-down'}
                        CompanySpan={'Martech'}
                        CompanyActive={industryStatus}
                      />
                    </div>

                    <div className="btn-icon grey" onClick={toggleTiles}>
                      <Button
                        CompanyIcon={'fas fa-user-md'}
                        CompanySpan={'IoT'}
                        CompanyActive={industryStatus}
                      />
                    </div>

                    <div className="btn-icon grey" onClick={toggleTiles}>
                      <Button
                        CompanyIcon={'fas fa-truck'}
                        CompanySpan={'Logistic'}
                        CompanyActive={industryStatus}
                      />
                    </div>

                    <div className="btn-icon grey" onClick={toggleTiles}>
                      <Button
                        CompanyIcon={'fas fa-seedling'}
                        CompanySpan={'Beauty'}
                        CompanyActive={industryStatus}
                      />
                    </div>

                    <div className="btn-icon grey" onClick={toggleTiles}>
                      <Button
                        CompanyIcon={'fas fa-laptop'}
                        CompanySpan={'Other'}
                        CompanyActive={industryStatus}
                      />
                    </div>
                  </div>
                </Fragment>
              }
            />
          </form>

          <form>
            <PrefBox
              heading={'preferences-heading green'}
              className={''}
              iconClass={'fas fa-chart-line'}
              title={'Seniority'}
              paragraph={'We would like to know how experienced you are.'}
              content={
                <Fragment>
                  <div
                    className="jobStatus-box"
                    id="Experiance"
                    onMouseDown={assignValue}
                  >
                    <div className="btn-icon" onClick={clearTiles}>
                      <ResetButton
                        CompanySpan={"Doesn't matter"}
                        CompanyActive={experianceStatus}
                      />
                    </div>

                    <div className="btn-icon" onClick={toggleTiles}>
                      <Button
                        CompanySpan={'Junior'}
                        CompanyActive={experianceStatus}
                      />
                    </div>

                    <div className="btn-icon" onClick={toggleTiles}>
                      <Button
                        CompanySpan={'Mid'}
                        CompanyActive={experianceStatus}
                      />
                    </div>

                    <div className="btn-icon" onClick={toggleTiles}>
                      <Button
                        CompanySpan={'Senior'}
                        CompanyActive={experianceStatus}
                      />
                    </div>
                  </div>
                </Fragment>
              }
            />
          </form>

          <form>
            <PrefBox
              heading={'preferences-heading purple'}
              className={''}
              iconClass={'far fa-file'}
              title={'Employment type'}
              paragraph={
                'Maybe you have some preferences about your future contract?'
              }
              content={
                <Fragment>
                  <div
                    className="jobStatus-box"
                    id="Employment"
                    onMouseDown={assignValue}
                  >
                    <div className="btn-icon" onClick={clearTiles}>
                      <ResetButton
                        CompanySpan={"Doesn't matter"}
                        CompanyActive={employmentStatus}
                      />
                    </div>

                    <div className="btn-icon" onClick={toggleTiles}>
                      <Button
                        CompanySpan={'B2B'}
                        CompanyActive={employmentStatus}
                      />
                    </div>

                    <div className="btn-icon" onClick={toggleTiles}>
                      <Button
                        CompanySpan={'Permanent'}
                        CompanyActive={employmentStatus}
                      />
                    </div>

                    <div className="btn-icon" onClick={toggleTiles}>
                      <Button
                        CompanySpan={'Mandate contact'}
                        CompanyActive={employmentStatus}
                      />
                    </div>
                  </div>
                </Fragment>
              }
            />
          </form>

          <form>
            <PrefBox
              heading={'preferences-heading blue'}
              className={'width-100'}
              iconClass={'fas fa-dollar-sign'}
              title={
                "Let's talk about money. How about your monthly salary expectations?"
              }
              paragraph={'Be realistic with that'}
              content={
                <Fragment>
                  <div className="input-values">
                    <span className="input-span">
                      {value.min * 1000} - {value.max * 1000} (PLN)
                    </span>

                    <div className="input-value">
                      Average earnings: {((value.max + value.min) / 2) * 1000}{' '}
                      PLN
                    </div>
                  </div>

                  <div className="jobStatus-box input-range">
                    <InputRange
                      maxValue={50}
                      minValue={0}
                      value={value}
                      onChange={value => setValue(value)}
                      formatLabel={value => `${value * 1000} PLN`}
                      allowSameValues={true}
                    />
                  </div>
                </Fragment>
              }
            />
          </form>

          <form>
            <PrefBox
              heading={'preferences-heading pink'}
              className={'width-100'}
              iconClass={'fas fa-microchip'}
              title={'Choose your main technology (max 2)'}
              paragraph={'What is your speciality?'}
              content={
                <Fragment>
                  <div
                    className="inputStatus-box"
                    onClick={focusTechInput}
                    onBlur={() => {
                      setShowTechnologies(false);
                    }}
                  >
                    <Input
                      value={tech}
                      name={'tech'}
                      placeholder={'For example Javascript, Html...'}
                      className={'tech-input'}
                      id={'tech'}
                      foo={searchInput}
                    />
                  </div>

                  <div className="cities-box">
                    <div
                      className={
                        showTechnologies ? 'cities' : 'cities display-none'
                      }
                    >
                      <ul onMouseDown={toggleSetChosenItem} className="tech-ul">
                        {renderTechnologiesFab()}
                        {renderTechnologiesFas()}
                      </ul>
                    </div>
                  </div>
                </Fragment>
              }
            />
          </form>

          <form>
            <PrefBox
              heading={'preferences-heading orange-dark'}
              className={'width-100'}
              iconClass={'fab fa-react'}
              title={'Share with us your skills and more tech stack (max 5)'}
              paragraph={
                'It will be easier for us to understand you even better.Please, arrange in the hierarchy.'
              }
              content={
                <Fragment>
                  <div
                    className="inputStatus-box"
                    onClick={focusSkillInput}
                    onBlur={() => {
                      setShowSkills(false);
                    }}
                  >
                    <Input
                      value={skill}
                      name={'skill'}
                      placeholder={'Select skills'}
                      className={'skill-input'}
                      id={'skill'}
                      foo={searchInput}
                    />
                  </div>

                  <div className="cities-box">
                    <div
                      className={
                        showSkills
                          ? 'cities skills'
                          : 'cities skill display-none'
                      }
                    >
                      <ul
                        onMouseDown={toggleSetChosenItem}
                        className="skill-ul"
                      >
                        {renderSkills()}
                      </ul>
                    </div>
                  </div>
                </Fragment>
              }
            />
          </form>
          <div>
            <input type="submit" value="Update" className="pink-button" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPreferences;
