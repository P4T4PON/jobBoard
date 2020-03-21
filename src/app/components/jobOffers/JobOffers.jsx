import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './JobOffers.css';
import Sidebar from './sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cities from './filters/cities/Cities';
import Technologies from './filters/technologies/Technologies';
import CompanyProfile from './companyProfile/CompanyProfile';

const JobOffers = () => {
  const isDay = useSelector(state => state.isDay);

  const [link, setLink] = useState('');
  const [title, setTitle] = useState('');
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [img, setImg] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [bgColor, setBgColor] = useState('');
  const [name, setName] = useState('');
  const [companyLink, setCompanyLink] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [companyType, setCompanyType] = useState('');
  const [exp, setExp] = useState('');
  const [age, setAge] = useState('');
  const [offerDetail, setOfferDetail] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [path, setPath] = useState('/');
  const [remote, setRemote] = useState('');
  const [city, setCity] = useState('');
  const [technology, setTechnology] = useState('');
  const [expLevel, setExpLevel] = useState('');

  const toggleProfile = (
    newLink,
    newTitle,
    newMin,
    newMax,
    newImg,
    newCompanyName,
    newCompanyAddress,
    newBgColor,
    newName,
    newCompanyLink,
    newCompanySize,
    newCompanyType,
    newExp,
    newAge,
    newOfferDetail,
    newCompanyDescription,
    newRemote
  ) => {
    setLink(newLink);
    setTitle(newTitle);
    setMin(newMin);
    setMax(newMax);
    setImg(newImg);
    setCompanyName(newCompanyName);
    setCompanyAddress(newCompanyAddress);
    setBgColor(newBgColor);
    setName(newName);
    setCompanyLink(newCompanyLink);
    setCompanySize(newCompanySize);
    setCompanyType(newCompanyType);
    setExp(newExp);
    setAge(newAge);
    setOfferDetail(newOfferDetail);
    setCompanyDescription(newCompanyDescription);
    setRemote(newRemote);
  };

  const toggleAllCities = (newCity, newPath) => {
    setCity(newCity);
    setPath(newPath);
  };

  const toggleAllTechnologies = newTechnology => {
    setTechnology(newTechnology);
  };

  const toggleExpLevel = newExpLevel => {
    setExpLevel(newExpLevel);
  };

  return (
    <div className="main-content">
      <div className={isDay ? 'sub-header' : 'sub-headerNightMode'}>
        <div className="filters">
          <Cities
            toggleAllCities={toggleAllCities}
            toggleProfile={toggleProfile}
          />

          <Technologies
            toggleAllTechnologies={toggleAllTechnologies}
            toggleExpLevel={toggleExpLevel}
          />
        </div>
      </div>
      <Router>
        <Switch>
          <Route
            exact
            path={path}
            render={() => (
              <Sidebar
                toggleProfile={toggleProfile}
                city={city}
                toggleAllCities={toggleAllCities}
                newTechnology={technology}
                expLevel={expLevel}
                isDay={isDay}
              />
            )}
          />

          <Route
            exact
            path={link}
            render={() => (
              <CompanyProfile
                title={title}
                min={min}
                max={max}
                img={img}
                companyName={companyName}
                companyAddress={companyAddress}
                bgColor={bgColor}
                name={name}
                companyLink={companyLink}
                companySize={companySize}
                companyType={companyType}
                exp={exp}
                age={age}
                offerDetail={offerDetail}
                companyDescription={companyDescription}
                remote={remote}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default JobOffers;
