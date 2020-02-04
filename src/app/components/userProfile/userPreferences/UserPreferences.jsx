import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Tile from './Tile';
import ResetTile from './ResetTile';
import Button from './Button';
import ResetButton from './ResetButton';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import UserPanel from '../UserPanel';

import './UserPreferences.css';

const UserPreferences = () => {
  const [panelActive, setPanelActive] = useState(3);
  const [showCities, setShowCities] = useState(false);
  const [showTechnologies, setShowTechnologies] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [city, setCity] = useState('');
  const [tech, setTech] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [remoteJob, setRemoteJob] = useState('');
  const [company, setCompany] = useState('');
  let [value, setValue] = useState({
    min: 0,
    max: 50
  });

  let [cityHolder, setCityHolder] = useState(false);
  let [techHolder, setTechHolder] = useState(false);

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

  let jobStatusActive = event => {
    let job_box = document.querySelector('.jobStatus-box');
    for (let i = 0; i < job_box.children.length; i++) {
      job_box.children[i].className = 'jobStatus-change mr-20';
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

  // za duzo zlego kodu i redundancja (64-213) (215-389) (392-666)
  // redundancja (669-799)

  // czas zmian

  //CITIES
  let hideCity = event => {
    if (event.target.className === '') {
      event.target.className += ' display-none';
    } else {
      event.target.parentElement.className += 'display-none';
    }
  };

  let retryChosenItem = event => {
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

  let toggleSetChosenItem = event => {
    let my_item = document.createElement('div');
    let chosen_item = event.target.innerHTML;
    let icon =
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

  let searchInput = event => {
    event.preventDefault();
    if (inputValue === 'city') {
      setCity(event.target.value);
    } else if (inputValue === 'tech') {
      setTech(event.target.value);
    } else if (inputValue === 'skill') {
      setCity(event.target.value);
    }

    for (
      let i = 0;
      i < document.querySelector(`.${inputValue}-ul`).children.length;
      i++
    ) {
      if (
        !document
          .querySelector(`.${inputValue}-ul`)
          .children[i].innerText.includes(event.target.value)
      ) {
        document.querySelector(`.${inputValue}-ul`).children[i].className =
          'display-none';
      }
      for (
        let i = 0;
        i < document.querySelector(`.${inputValue}-ul`).children.length;
        i++
      ) {
        if (
          document
            .querySelector(`.${inputValue}-ul`)
            .children[i].innerText.includes(event.target.value) &&
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
                document.querySelector(`#${inputValue}`).children[j]
                  .innerText ===
                document.querySelector(`.${inputValue}-ul`).children[i]
                  .innerText
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
                document.querySelector(`#${inputValue}`).children[k]
                  .innerText ===
                document.querySelector(`.${inputValue}-ul`).children[i]
                  .innerText
              ) {
                document.querySelector(`.${inputValue}-ul`).children[
                  i
                ].className = 'display-none';
              }
            }
          }
        }
      }
    }
  };

  let focusInput = () => {
    document.querySelector('.city-input').focus();
    setInputValue('city');
    setShowCities(true);
  };

  let focusTechInput = () => {
    document.querySelector('.tech-input').focus();
    setInputValue('tech');
    setShowTechnologies(true);
  };

  let focusSkillInput = () => {
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

  let [cities, setCities] = useState([
    <Fragment>
      <li onMouseDown={hideCity}>warszawa</li>
      <li onMouseDown={hideCity}>kraków</li>
      <li onMouseDown={hideCity}>wrocław</li>
      <li onMouseDown={hideCity}>poznań</li>
      <li onMouseDown={hideCity}>trójmiasto</li>
      <li onMouseDown={hideCity}>białystok</li>
      <li onMouseDown={hideCity}>bielsko-biała</li>
      <li onMouseDown={hideCity}>bydgoszcz</li>
      <li onMouseDown={hideCity}>częstochowa</li>
      <li onMouseDown={hideCity}>gliwice</li>
      <li onMouseDown={hideCity}>katowice</li>
      <li onMouseDown={hideCity}>kielce</li>
      <li onMouseDown={hideCity}>lublin</li>
      <li onMouseDown={hideCity}>łódź</li>
      <li onMouseDown={hideCity}>olsztyn</li>
      <li onMouseDown={hideCity}>opole</li>
      <li onMouseDown={hideCity}>toruń</li>
      <li onMouseDown={hideCity}>rzeszów</li>
      <li onMouseDown={hideCity}>szczecin</li>
    </Fragment>
  ]);
  //TECHNOLOGIESa

  const [technologies, setTechnologies] = useState([
    <Fragment>
      <li onMouseDown={hideCity}>
        <i className="fab fa-js"></i>javascript
      </li>
      <li onMouseDown={hideCity}>
        <i className="fab fa-html5"></i>html
      </li>
      <li onMouseDown={hideCity}>
        <i className="fab fa-php"></i>php
      </li>
      <li onMouseDown={hideCity}>
        <i className="fas fa-gem"></i>ruby
      </li>
      <li onMouseDown={hideCity}>
        <i className="fab fa-python"></i>python
      </li>
      <li onMouseDown={hideCity}>
        <i className="fab fa-java"></i>java
      </li>
      <li onMouseDown={hideCity}>
        <i className="fas fa-bacon"></i>net
      </li>
      <li onMouseDown={hideCity}>
        <i className="fab fa-stripe-s"></i>scala
      </li>
      <li onMouseDown={hideCity}>
        <i className="fab fa-cuttlefish"></i>c
      </li>
      <li onMouseDown={hideCity}>
        <i className="fas fa-mobile-alt"></i>mobile
      </li>
      <li onMouseDown={hideCity}>
        <i className="fas fa-search"></i>testing
      </li>
      <li onMouseDown={hideCity}>
        <i className="fab fa-dev"></i>devops
      </li>
      <li onMouseDown={hideCity}>
        <i className="fas fa-magic"></i>ux/ui
      </li>
      <li onMouseDown={hideCity}>
        <i className="fas fa-user"></i>pm
      </li>
      <li onMouseDown={hideCity}>
        <i className="fas fa-gamepad"></i>game
      </li>
      <li onMouseDown={hideCity}>
        <i className="fab fa-bitcoin"></i>blockchain
      </li>
      <li onMouseDown={hideCity}>
        <i className="fas fa-shield-alt"></i>security
      </li>
      <li onMouseDown={hideCity}>
        <i className="fas fa-database"></i>data
      </li>
      <li onMouseDown={hideCity}>
        <i className="fas fa-hippo"></i>go
      </li>
      <li onMouseDown={hideCity}>
        <i className="fab fa-stackpath"></i>sap
      </li>
      <li onMouseDown={hideCity}>
        <i className="fab fa-korvue"></i>kotlin
      </li>
      <li onMouseDown={hideCity}>
        <i className="fas fa-tint"></i>elixir
      </li>
      <li onMouseDown={hideCity}>
        <i className="fas fa-apple-alt"></i>perl
      </li>
    </Fragment>
  ]);

  //SKILLS

  const [skills, setSkills] = [
    <Fragment>
      <li onMouseDown={hideCity}>JavaScript</li>
      <li onMouseDown={hideCity}>React</li>
      <li onMouseDown={hideCity}>Angular</li>
      <li onMouseDown={hideCity}>Java</li>
      <li onMouseDown={hideCity}>PHP</li>
      <li onMouseDown={hideCity}>Python</li>
      <li onMouseDown={hideCity}>.NET</li>
      <li onMouseDown={hideCity}>Node.js</li>
      <li onMouseDown={hideCity}>Docker</li>
      <li onMouseDown={hideCity}>HTML5</li>
      <li onMouseDown={hideCity}>Androin</li>
      <li onMouseDown={hideCity}>AWS</li>
      <li onMouseDown={hideCity}>IOS</li>
      <li onMouseDown={hideCity}>CSS3</li>
      <li onMouseDown={hideCity}>C#</li>
      <li onMouseDown={hideCity}>Jira</li>
      <li onMouseDown={hideCity}>Git</li>
      <li onMouseDown={hideCity}>MySQL</li>
      <li onMouseDown={hideCity}>Typescript</li>
      <li onMouseDown={hideCity}>C++</li>
      <li onMouseDown={hideCity}>Big Data</li>
      <li onMouseDown={hideCity}>Linux</li>
      <li onMouseDown={hideCity}>React Native</li>
      <li onMouseDown={hideCity}>Ruby</li>
      <li onMouseDown={hideCity}>Symfony</li>
      <li onMouseDown={hideCity}>DevOps</li>
      <li onMouseDown={hideCity}>Swift</li>
      <li onMouseDown={hideCity}>MicrosoftSQL</li>
      <li onMouseDown={hideCity}>Vue.js</li>
      <li onMouseDown={hideCity}>Kotlin</li>
      <li onMouseDown={hideCity}>Kubernetes</li>
      <li onMouseDown={hideCity}>MongoDB</li>
      <li onMouseDown={hideCity}>Microsoft Azure</li>
      <li onMouseDown={hideCity}>QA</li>
      <li onMouseDown={hideCity}>java EE</li>
      <li onMouseDown={hideCity}>Spring</li>
      <li onMouseDown={hideCity}>PostgreSQL</li>
      <li onMouseDown={hideCity}>Blockchain</li>
      <li onMouseDown={hideCity}>Slack</li>
      <li onMouseDown={hideCity}>Hibernate</li>
      <li onMouseDown={hideCity}>Rails</li>
      <li onMouseDown={hideCity}>Jenkins</li>
      <li onMouseDown={hideCity}>testing</li>
      <li onMouseDown={hideCity}>sql</li>
      <li onMouseDown={hideCity}>Scala</li>
      <li onMouseDown={hideCity}>ElasticSearch</li>
      <li onMouseDown={hideCity}>jQuery</li>
      <li onMouseDown={hideCity}>Google Cloud Platform</li>
      <li onMouseDown={hideCity}>Github</li>
      <li onMouseDown={hideCity}>Selenium</li>
      <li onMouseDown={hideCity}>Scrum</li>
      <li onMouseDown={hideCity}>Magento</li>
      <li onMouseDown={hideCity}>Laravel</li>
      <li onMouseDown={hideCity}>Redux</li>
      <li onMouseDown={hideCity}>Golang</li>
      <li onMouseDown={hideCity}>Wordpress</li>
      <li onMouseDown={hideCity}>Ansible</li>
      <li onMouseDown={hideCity}>OracleDB</li>
      <li onMouseDown={hideCity}>Mobile</li>
      <li onMouseDown={hideCity}>Objective C</li>
      <li onMouseDown={hideCity}>Redis</li>
      <li onMouseDown={hideCity}>Terraform</li>
      <li onMouseDown={hideCity}>Django</li>
      <li onMouseDown={hideCity}>Amazon Web Service</li>
      <li onMouseDown={hideCity}>RebbitMQ</li>
      <li onMouseDown={hideCity}>Nginx</li>
      <li onMouseDown={hideCity}>Bootstrap</li>
      <li onMouseDown={hideCity}>.NET Core</li>
      <li onMouseDown={hideCity}>JS</li>
      <li onMouseDown={hideCity}>Flutter</li>
      <li onMouseDown={hideCity}>PWA</li>
      <li onMouseDown={hideCity}>Azure</li>
      <li onMouseDown={hideCity}>Kafka</li>
      <li onMouseDown={hideCity}>xamarin</li>
      <li onMouseDown={hideCity}>Sass</li>
      <li onMouseDown={hideCity}>Spring Boot</li>
      <li onMouseDown={hideCity}>Elixir</li>
      <li onMouseDown={hideCity}>Flask</li>
      <li onMouseDown={hideCity}>Cassandra</li>
      <li onMouseDown={hideCity}>Windows</li>
      <li onMouseDown={hideCity}>Circle CI</li>
      <li onMouseDown={hideCity}>html</li>
      <li onMouseDown={hideCity}>Apache Spark</li>
      <li onMouseDown={hideCity}>Ember</li>
      <li onMouseDown={hideCity}>Bash</li>
      <li onMouseDown={hideCity}>Vue</li>
      <li onMouseDown={hideCity}>Unity</li>
      <li onMouseDown={hideCity}>SAP</li>
      <li onMouseDown={hideCity}>BI</li>
      <li onMouseDown={hideCity}>Zend Framework</li>
      <li onMouseDown={hideCity}>Akka</li>
      <li onMouseDown={hideCity}>Power BI</li>
      <li onMouseDown={hideCity}>Dart</li>
      <li onMouseDown={hideCity}>Go</li>
      <li onMouseDown={hideCity}>handoop</li>
      <li onMouseDown={hideCity}>Erlang</li>
      <li onMouseDown={hideCity}>CSS</li>
      <li onMouseDown={hideCity}>Solr</li>
      <li onMouseDown={hideCity}>Photoshop</li>
      <li onMouseDown={hideCity}>GraphQL</li>
      <li onMouseDown={hideCity}>JSP</li>
      <li onMouseDown={hideCity}>Tensorflow</li>
      <li onMouseDown={hideCity}>ETL</li>
      <li onMouseDown={hideCity}>React.js</li>
      <li onMouseDown={hideCity}>IoT</li>
      <li onMouseDown={hideCity}>Rust</li>
      <li onMouseDown={hideCity}>Puppet</li>
      <li onMouseDown={hideCity}>R</li>
      <li onMouseDown={hideCity}>abap</li>
      <li onMouseDown={hideCity}>Microsoft BI Stack</li>
      <li onMouseDown={hideCity}>HAProxy</li>
      <li onMouseDown={hideCity}>Hbase</li>
      <li onMouseDown={hideCity}>Sinon.js</li>
      <li onMouseDown={hideCity}>Bower</li>
      <li onMouseDown={hideCity}>Hotjar</li>
      <li onMouseDown={hideCity}>Less</li>
      <li onMouseDown={hideCity}>ZeroMQ</li>
      <li onMouseDown={hideCity}>Swagger</li>
      <li onMouseDown={hideCity}>Visual Basic</li>
      <li onMouseDown={hideCity}>RWD</li>
      <li onMouseDown={hideCity}>Vagrant</li>
      <li onMouseDown={hideCity}>Babel</li>
      <li onMouseDown={hideCity}>SD-WAN</li>
      <li onMouseDown={hideCity}>Sinatra</li>
      <li onMouseDown={hideCity}>Axon Framework</li>
      <li onMouseDown={hideCity}>Haskell</li>
      <li onMouseDown={hideCity}>Mocha</li>
      <li onMouseDown={hideCity}>GNU R</li>
      <li onMouseDown={hideCity}>Perl</li>
      <li onMouseDown={hideCity}>Groovy</li>
      <li onMouseDown={hideCity}>BGP Optimization</li>
      <li onMouseDown={hideCity}>MapR</li>
      <li onMouseDown={hideCity}>DynamoDB</li>
      <li onMouseDown={hideCity}>Gulp</li>
      <li onMouseDown={hideCity}>Consul</li>
      <li onMouseDown={hideCity}>iVPN</li>
      <li onMouseDown={hideCity}>Aurelia</li>
      <li onMouseDown={hideCity}>Memcached</li>
      <li onMouseDown={hideCity}>Hystrix</li>
      <li onMouseDown={hideCity}>Twig</li>
      <li onMouseDown={hideCity}>Codeigniter</li>
      <li onMouseDown={hideCity}>Grunt</li>
      <li onMouseDown={hideCity}>Logstash</li>
      <li onMouseDown={hideCity}>Trello</li>
      <li onMouseDown={hideCity}>Chef</li>
      <li onMouseDown={hideCity}>Fuse</li>
      <li onMouseDown={hideCity}>Zabbix</li>
      <li onMouseDown={hideCity}>Network Security</li>
      <li onMouseDown={hideCity}>Kibana</li>
      <li onMouseDown={hideCity}>ArangoDB</li>
      <li onMouseDown={hideCity}>KnockOutJS</li>
      <li onMouseDown={hideCity}>Cypress.io</li>
      <li onMouseDown={hideCity}>Cloud Access</li>
      <li onMouseDown={hideCity}>C</li>
      <li onMouseDown={hideCity}>Tibco</li>
      <li onMouseDown={hideCity}>DataSecurity</li>
      <li onMouseDown={hideCity}>Fundation</li>
      <li onMouseDown={hideCity}>Flux</li>
      <li onMouseDown={hideCity}>PyTest</li>
      <li onMouseDown={hideCity}>Clojure</li>
      <li onMouseDown={hideCity}>Cloudformation</li>
      <li onMouseDown={hideCity}>ECMAScript</li>
      <li onMouseDown={hideCity}>Gradle</li>
      <li onMouseDown={hideCity}>F#</li>
      <li onMouseDown={hideCity}>Packer</li>
      <li onMouseDown={hideCity}>Maven</li>
      <li onMouseDown={hideCity}>Mesos</li>
      <li onMouseDown={hideCity}>Hive</li>
      <li onMouseDown={hideCity}>JEE</li>
      <li onMouseDown={hideCity}>Couchbase</li>
      <li onMouseDown={hideCity}>Pimcore</li>
      <li onMouseDown={hideCity}>Backbone</li>
      <li onMouseDown={hideCity}>Chai</li>
    </Fragment>
  ];

  //Stage
  let clearStageTiles = () => {
    setCompanyStageStatus(false);
    setCompanyStage(0);
  };

  let toggleStageTiles = event => {
    setCompanyStageStatus(true);

    if (
      event.target.parentElement.children[0].className ===
        'jobStatus-change company border-pink' ||
      event.target.parentElement.className ===
        'jobStatus-change company border-pink'
    ) {
      setCompanyStage(companyStage - 1);
      if (companyStage === 1) {
        setCompanyStageStatus(false);
      }
    } else if (
      event.target.parentElement.children[0].className ===
        'jobStatus-change company' ||
      event.target.parentElement.className === 'jobStatus-change company'
    ) {
      setCompanyStage(companyStage + 1);
    }
  };

  //Kind
  let clearKindTiles = () => {
    setCompanyKindStatus(false);
    setCompanyKind(0);
  };

  let toggleKindTiles = event => {
    setCompanyKindStatus(true);

    if (
      event.target.parentElement.children[0].className ===
        'jobStatus-change company border-pink' ||
      event.target.parentElement.className ===
        'jobStatus-change company border-pink'
    ) {
      setCompanyKind(companyKind - 1);
      if (companyKind === 1) {
        setCompanyKindStatus(false);
      }
    } else if (
      event.target.parentElement.children[0].className ===
        'jobStatus-change company' ||
      event.target.parentElement.className === 'jobStatus-change company'
    ) {
      setCompanyKind(companyKind + 1);
    }
  };

  //industry
  let clearIndustryTiles = () => {
    setIndustryStatus(false);
    setIndustry(0);
  };

  let toggleIndustryTiles = event => {
    setIndustryStatus(true);

    if (
      event.target.parentElement.children[0].className ===
        'jobStatus-button border-pink' ||
      event.target.parentElement.className === 'jobStatus-button border-pink'
    ) {
      setIndustry(industry - 1);
      if (industry === 1) {
        setIndustryStatus(false);
      }
    } else if (
      event.target.parentElement.children[0].className === 'jobStatus-button' ||
      event.target.parentElement.className === 'jobStatus-button'
    ) {
      setIndustry(industry + 1);
    }
  };
  //experiance
  let clearExperianceTiles = () => {
    setExperianceStatus(false);
    setExperiance(0);
  };

  let toggleExperianceTiles = event => {
    setExperianceStatus(true);

    if (
      event.target.parentElement.children[0].className ===
        'jobStatus-button border-pink' ||
      event.target.parentElement.className === 'jobStatus-button border-pink'
    ) {
      setExperiance(experiance - 1);
      if (experiance === 1) {
        setExperianceStatus(false);
      }
    } else if (
      event.target.parentElement.children[0].className === 'jobStatus-button' ||
      event.target.parentElement.className === 'jobStatus-button'
    ) {
      setExperiance(experiance + 1);
    }
  };
  //Employment
  let clearEmploymentTiles = () => {
    setEmploymentStatus(false);
    setEmployment(0);
  };

  let toggleEmploymentTiles = event => {
    setEmploymentStatus(true);

    if (
      event.target.parentElement.children[0].className ===
        'jobStatus-button border-pink' ||
      event.target.parentElement.className === 'jobStatus-button border-pink'
    ) {
      setEmployment(employment - 1);
      if (employment === 1) {
        setEmploymentStatus(false);
      }
    } else if (
      event.target.parentElement.children[0].className === 'jobStatus-button' ||
      event.target.parentElement.className === 'jobStatus-button'
    ) {
      setEmployment(employment + 1);
    }
  };

  return (
    <div className="userLogin-content">
      <UserPanel active={panelActive} inputValue={inputValue} />
      <div className="preferences">
        <div className="preferences-content">
          <h1>Preferences</h1>
          <DevSkillsList />
          <form>
            <div className="preferences-box">
              <header className="preferences-header">
                <div className="preferences-heading">
                  <i className="far fa-eye"></i>
                  <h2>Ok, let's start! What is your status in job search?</h2>
                </div>
                <p>
                  Let us know if we should look for the best job on the market
                  for you.
                </p>
              </header>
              <div className="preferences-jobStatus">
                <div className="jobStatus-box">
                  <div
                    className="jobStatus-change mr-20 border-pink"
                    onClick={jobStatusActive}
                  >
                    <i className="far fa-file-alt"></i>
                    <span>
                      Actively looking<br></br> for a job
                    </span>
                  </div>
                  <div
                    className="jobStatus-change mr-20"
                    onClick={jobStatusActive}
                  >
                    <i className="fas fa-envelope-open-text"></i>
                    <span>
                      Open<br></br> for proposals
                    </span>
                  </div>
                  <div
                    className="jobStatus-change mr-20"
                    onClick={jobStatusActive}
                  >
                    <i className="fas fa-unlock-alt"></i>
                    <span>
                      Not open<br></br> for proposals
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </form>

          <form>
            <div className="preferences-box">
              <header className="preferences-header">
                <div className="preferences-heading blue">
                  <i className="fas fa-map-marker-alt"></i>
                  <h2>Where would you like to work?</h2>
                </div>
                <p>Choose as many as you like.</p>
              </header>

              <div className="preferences-jobStatus">
                <div
                  className="inputStatus-box"
                  onClick={focusInput}
                  onBlur={() => {
                    setShowCities(false);
                  }}
                >
                  <div className="inputStatus" id="city"></div>
                  <input
                    name="city"
                    value={city}
                    placeholder="Select your city"
                    autoComplete="off"
                    onChange={searchInput}
                    className="city-input"
                  />
                </div>
              </div>
            </div>

            <div className="cities-box">
              <div className={showCities ? 'cities' : 'cities display-none'}>
                <ul onMouseDown={toggleSetChosenItem} className="city-ul">
                  {cities}
                </ul>
              </div>
            </div>
          </form>

          <form>
            <div className="preferences-box">
              <header className="preferences-header">
                <div className="preferences-heading light-blue">
                  <i className="fas fa-umbrella-beach"></i>
                  <h2>Are you willing to work remotely?</h2>
                </div>
                <p>We will try to find you an attractive remote job.</p>
              </header>
              <div className="preferences-jobStatus">
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
              </div>
            </div>
          </form>

          <form>
            <div className="preferences-box">
              <header className="preferences-header">
                <div className="preferences-heading orange">
                  <i className="fas fa-user-friends"></i>
                  <h2>What stage should the company be in?</h2>
                </div>
                <p>Choose as many as you like.</p>
              </header>
              <div className="preferences-jobStatus">
                <div className="jobStatus-box">
                  <div className="z-index100" onClick={clearStageTiles}>
                    <ResetTile
                      CompanyIcon={'far fa-check-square'}
                      CompanySpan={"Doesn't matter"}
                      CompanyActive={companyStageStatus}
                    />
                  </div>

                  <div className="z-index100" onClick={toggleStageTiles}>
                    <Tile
                      CompanyIcon={'fas fa-home'}
                      CompanySpan={'Early stage(0-30)'}
                      CompanyActive={companyStageStatus}
                    />
                  </div>

                  <div className="z-index100" onClick={toggleStageTiles}>
                    <Tile
                      CompanyIcon={'far fa-building'}
                      CompanySpan={'Growth stage (30-100)'}
                      CompanyActive={companyStageStatus}
                    />
                  </div>

                  <div className="z-index100" onClick={toggleStageTiles}>
                    <Tile
                      CompanyIcon={'fas fa-city'}
                      CompanySpan={'Estabilished(100-250)'}
                      CompanyActive={companyStageStatus}
                    />
                  </div>

                  <div className="z-index100" onClick={toggleStageTiles}>
                    <Tile
                      CompanyIcon={'fas fa-university'}
                      CompanySpan={'Corporation(250+)'}
                      CompanyActive={companyStageStatus}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>

          <form>
            <div className="preferences-box">
              <header className="preferences-header">
                <div className="preferences-heading red">
                  <i className="fas fa-city"></i>
                  <h2>For what kind of company would you like to work for</h2>
                </div>
                <p>We want to find a company that trully fits you</p>
              </header>
              <div className="preferences-jobStatus">
                <div className="jobStatus-box">
                  <div className="z-index100" onClick={clearKindTiles}>
                    <ResetTile
                      CompanyIcon={'far fa-check-square'}
                      CompanySpan={"Doesn't matter"}
                      CompanyActive={companyKindStatus}
                    />
                  </div>

                  <div className="z-index100" onClick={toggleKindTiles}>
                    <Tile
                      CompanyIcon={'fas fa-rocket'}
                      CompanySpan={'Startup'}
                      CompanyActive={companyKindStatus}
                    />
                  </div>

                  <div className="z-index100" onClick={toggleKindTiles}>
                    <Tile
                      CompanyIcon={'fas fa-flask'}
                      CompanySpan={'Software house'}
                      CompanyActive={companyKindStatus}
                    />
                  </div>

                  <div className="z-index100" onClick={toggleKindTiles}>
                    <Tile
                      CompanyIcon={'fas fa-shopping-cart'}
                      CompanySpan={'E-commerce'}
                      CompanyActive={companyKindStatus}
                    />
                  </div>

                  <div className="z-index100" onClick={toggleKindTiles}>
                    <Tile
                      CompanyIcon={'fas fa-hotel'}
                      CompanySpan={'Corporation'}
                      CompanyActive={companyKindStatus}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>

          <form>
            <div className="preferences-box">
              <header className="preferences-header">
                <div className="preferences-heading grey">
                  <i className="far fa-building"></i>
                  <h2>Projects in which industry would you like to develop?</h2>
                </div>
                <p>
                  We really intend to match the project to you Choose as many as
                  you like.
                </p>
              </header>
              <div className="preferences-jobStatus">
                <div className="jobStatus-box">
                  <div className="btn-icon" onClick={clearIndustryTiles}>
                    <ResetButton
                      CompanySpan={"Doesn't matter"}
                      CompanyActive={industryStatus}
                    />
                  </div>

                  <div className="btn-icon grey" onClick={toggleIndustryTiles}>
                    <Button
                      CompanyIcon={'fas fa-dollar-sign'}
                      CompanySpan={'Fintech'}
                      CompanyActive={industryStatus}
                    />
                  </div>

                  <div className="btn-icon grey" onClick={toggleIndustryTiles}>
                    <Button
                      CompanyIcon={'fas fa-cube'}
                      CompanySpan={'Bloackchain'}
                      CompanyActive={industryStatus}
                    />
                  </div>

                  <div className="btn-icon grey" onClick={toggleIndustryTiles}>
                    <Button
                      CompanyIcon={'fas fa-shopping-cart'}
                      CompanySpan={'E-commerce'}
                      CompanyActive={industryStatus}
                    />
                  </div>

                  <div className="btn-icon grey" onClick={toggleIndustryTiles}>
                    <Button
                      CompanyIcon={'far fa-heart'}
                      CompanySpan={'Medicine'}
                      CompanyActive={industryStatus}
                    />
                  </div>

                  <div className="btn-icon grey" onClick={toggleIndustryTiles}>
                    <Button
                      CompanyIcon={'fas fa-medal'}
                      CompanySpan={'Military'}
                      CompanyActive={industryStatus}
                    />
                  </div>

                  <div className="btn-icon grey" onClick={toggleIndustryTiles}>
                    <Button
                      CompanyIcon={'fas fa-plane-departure'}
                      CompanySpan={'Travel'}
                      CompanyActive={industryStatus}
                    />
                  </div>

                  <div className="btn-icon grey" onClick={toggleIndustryTiles}>
                    <Button
                      CompanyIcon={'fas fa-cart-arrow-down'}
                      CompanySpan={'Martech'}
                      CompanyActive={industryStatus}
                    />
                  </div>

                  <div className="btn-icon grey" onClick={toggleIndustryTiles}>
                    <Button
                      CompanyIcon={'fas fa-user-md'}
                      CompanySpan={'IoT'}
                      CompanyActive={industryStatus}
                    />
                  </div>

                  <div className="btn-icon grey" onClick={toggleIndustryTiles}>
                    <Button
                      CompanyIcon={'fas fa-truck'}
                      CompanySpan={'Logistic'}
                      CompanyActive={industryStatus}
                    />
                  </div>

                  <div className="btn-icon grey" onClick={toggleIndustryTiles}>
                    <Button
                      CompanyIcon={'fas fa-seedling'}
                      CompanySpan={'Beauty'}
                      CompanyActive={industryStatus}
                    />
                  </div>

                  <div className="btn-icon grey" onClick={toggleIndustryTiles}>
                    <Button
                      CompanyIcon={'fas fa-laptop'}
                      CompanySpan={'Other'}
                      CompanyActive={industryStatus}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>

          <form>
            <div className="preferences-box">
              <header className="preferences-header">
                <div className="preferences-heading green">
                  <i className="fas fa-chart-line"></i>
                  <h2>Seniority</h2>
                </div>
                <p>We would like to know how experienced you are.</p>
              </header>
              <div className="preferences-jobStatus">
                <div className="jobStatus-box">
                  <div className="btn-icon" onClick={clearExperianceTiles}>
                    <ResetButton
                      CompanySpan={"Doesn't matter"}
                      CompanyActive={experianceStatus}
                    />
                  </div>

                  <div className="btn-icon" onClick={toggleExperianceTiles}>
                    <Button
                      CompanySpan={'Junior'}
                      CompanyActive={experianceStatus}
                    />
                  </div>

                  <div className="btn-icon" onClick={toggleExperianceTiles}>
                    <Button
                      CompanySpan={'Mid'}
                      CompanyActive={experianceStatus}
                    />
                  </div>

                  <div className="btn-icon" onClick={toggleExperianceTiles}>
                    <Button
                      CompanySpan={'Senior'}
                      CompanyActive={experianceStatus}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>

          <form>
            <div className="preferences-box">
              <header className="preferences-header">
                <div className="preferences-heading purple">
                  <i className="far fa-file"></i>
                  <h2>Employment type</h2>
                </div>
                <p>
                  Maybe you have some preferences about your future contract?
                </p>
              </header>
              <div className="preferences-jobStatus">
                <div className="jobStatus-box">
                  <div className="btn-icon" onClick={clearEmploymentTiles}>
                    <ResetButton
                      CompanySpan={"Doesn't matter"}
                      CompanyActive={employmentStatus}
                    />
                  </div>

                  <div className="btn-icon" onClick={toggleEmploymentTiles}>
                    <Button
                      CompanySpan={'B2B'}
                      CompanyActive={employmentStatus}
                    />
                  </div>

                  <div className="btn-icon" onClick={toggleEmploymentTiles}>
                    <Button
                      CompanySpan={'Permanent'}
                      CompanyActive={employmentStatus}
                    />
                  </div>

                  <div className="btn-icon" onClick={toggleEmploymentTiles}>
                    <Button
                      CompanySpan={'Mandate contact'}
                      CompanyActive={employmentStatus}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>

          <form>
            <div className="preferences-box input-Box">
              <header className="preferences-header">
                <div className="preferences-heading blue">
                  <i className="fas fa-dollar-sign"></i>
                  <h2>
                    Let's talk about money. How about your monthly salary
                    expectations?
                  </h2>
                </div>
                <p>Be realistic with that</p>
              </header>
              <div className="input-values">
                <span className="input-span">
                  {value.min * 1000} - {value.max * 1000} (PLN)
                </span>

                <div className="input-value">
                  Average earnings: {((value.max + value.min) / 2) * 1000} PLN
                </div>
              </div>
              <div className="preferences-jobStatus">
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
              </div>
            </div>
          </form>

          <form>
            <div className="preferences-box">
              <header className="preferences-header">
                <div className="preferences-heading pink">
                  <i className="fas fa-microchip"></i>
                  <h2>
                    Choose your main technology <b>(max 2)</b>
                  </h2>
                </div>
                <p>What is your speciality?</p>
              </header>

              <div className="preferences-jobStatus">
                <div
                  className="inputStatus-box"
                  onClick={focusTechInput}
                  onBlur={() => {
                    setShowTechnologies(false);
                  }}
                >
                  <div className="inputStatus" id="tech"></div>
                  <input
                    value={tech}
                    name="city"
                    placeholder="For example Javascript,html..."
                    onChange={searchInput}
                    autoComplete="off"
                    className="tech-input"
                  />
                </div>
              </div>
            </div>

            <div className="cities-box">
              <div
                className={showTechnologies ? 'cities' : 'cities display-none'}
              >
                <ul onMouseDown={toggleSetChosenItem} className="tech-ul">
                  {technologies}
                </ul>
              </div>
            </div>
          </form>

          <form>
            <div className="preferences-box">
              <header className="preferences-header">
                <div className="preferences-heading orange-dark">
                  <i className="fab fa-react"></i>
                  <h2>Share with us your skills and more tech stack</h2>
                </div>
                <p>
                  It will be easier for us to understand you even better.
                  Please, arrange in the hierarchy.
                </p>
              </header>

              <div className="preferences-jobStatus">
                <div
                  className="inputStatus-box"
                  onClick={focusSkillInput}
                  onBlur={() => {
                    setShowSkills(false);
                  }}
                >
                  <div className="inputStatus" id="skill">
                    {' '}
                  </div>
                  <input
                    name="city"
                    placeholder="Select skills"
                    className="skill-input"
                    autoComplete="off"
                    onChange={searchInput}
                  />
                </div>
              </div>
            </div>

            <div className="cities-box">
              <div
                className={
                  showSkills ? 'cities skills' : 'cities skill display-none'
                }
              >
                <ul onMouseDown={toggleSetChosenItem} className="skill-ul">
                  {skills}
                </ul>
              </div>
            </div>
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
