import React, { useState } from 'react';
import UserPreferencesHeader from '../../UserPreferencesHeader';
import Input from '../../Input';
import { skills } from '../../../../../../constans';

const SkillBox = ({ isDay }) => {
  const [skill, setSkill] = useState('');
  const [showSkill, setShowSkill] = useState(false);

  const renderSkills = () => {
    return skills.map((skill, index) => <li key={index}>{skill}</li>);
  };

  const searchInput = event => {
    setSkill(event.target.value);
  };

  const focusInput = () => {
    document.querySelector('.skill-input').focus();
    setShowSkill(true);
  };

  return (
    <div
      className={
        isDay ? 'preferences-box' : 'preferences-box preferences-boxNightMode'
      }
    >
      <UserPreferencesHeader
        heading={
          isDay
            ? 'preferences-heading orange-dark'
            : 'preferences-heading preferences-headingNightMode orange-dark'
        }
        className={'width-100'}
        iconClass={'fab fa-react'}
        title={'Share with us your skills and more tech stack (max 5)'}
        paragraph={
          'It will be easier for us to understand you even better.Please, arrange in the hierarchy.'
        }
      />
      <div className="preferences-jobStatus">
        <div
          className={
            isDay
              ? 'inputStatus-box'
              : 'inputStatus-box inputStatus-boxNightMode'
          }
          onClick={focusInput}
        >
          <Input
            value={skill}
            name={'skill'}
            placeholder={'Select skills'}
            className={'skill-input'}
            searchInput={searchInput}
            hideInput={() => setShowSkill(false)}
          />
        </div>
        <div className="cities-box">
          <div className={showSkill ? 'skills cities' : 'cities display-none'}>
            <ul className="city-ul">{renderSkills()}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillBox;
