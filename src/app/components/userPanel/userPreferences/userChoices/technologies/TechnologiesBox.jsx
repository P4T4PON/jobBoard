import React, { useState } from 'react';
import Input from '../../Input';
import UserPreferencesBox from '../../userPreferencesBox/UserPreferencesBox'
import TechnologiesList from './technologiesList/TechnologiesList'

const TechnologiesBox = ({ isDay, toggleTechnologies, userTechnologies, technologies, toggleUserTechnologies, technologyError }) => {
  const [tech, setTech] = useState('');
  const [showTech, setShowTech] = useState(false);

  const searchInput = event => {
    setTech(event.target.value);
  };

  const focusInput = () => {
    document.querySelector('.tech-input').focus();
    setShowTech(true);
  };

  const filterValues = (chosenTech) => {
    if (userTechnologies.length != 2) {
      for (let i = 0; i < technologies.length; i++) {
        if (technologies[i].name === chosenTech.name) {
          technologies.splice(i, 1)
        }
      }
    }
  }

  const filterChosenTechnologies = (chosenTech) => {
    for (let i = 0; i < userTechnologies.length; i++) {
      if (userTechnologies[i] === chosenTech) {
        userTechnologies.splice(i, 1)
      }
    }
  }

  const removeTech = (tech) => {
    if (!technologies.includes(tech)) {
      technologies.push(tech)
      filterChosenTechnologies(tech)
    }
  }

  const renderChosenCities = () => {
    return (userTechnologies.map((tech, index) => <div key={index} className='inputChosen'><i style={{ marginRight: '5px' }} className={tech.icon} />
      {tech.name}<i className="fas fa-times-circle" onClick={() => removeTech(tech)} /></div>))
  }

  return (
    <UserPreferencesBox
      iconClass={'fas fa-microchip'}
      title={'Choose your main technology (max 2)'}
      paragraph={'What is your speciality?'}
      color={'pink'}
    >
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
            value={tech}
            name={'tech'}
            placeholder={'For example Javascript, Html...'}
            className={'tech-input'}
            searchInput={searchInput}
            hideInput={() => setShowTech(false)}
          />
        </div>
        <TechnologiesList
          tech={tech}
          showTech={showTech}
          technologies={technologies}
          userTechnologies={userTechnologies}
          toggleTechnologies={toggleTechnologies}
          toggleUserTechnologies={toggleUserTechnologies}
        />
      </div>
      <div className='error' style={{ margin: '30px 0 0 0', fontSize: '18px' }}>{technologyError}</div>
    </UserPreferencesBox>
  );
};

export default TechnologiesBox;
