import React, { useState, useEffect } from 'react';
import UserPreferencesBox from '../../userPreferencesBox/UserPreferencesBox'
import Input from '../../Input';
import SkillList from './skillList/SkillList'
import ChosenInput from '../workPlace/chosenInput/ChosenInput'

const SkillBox = ({ isDay, skills, toggleSkills, userSkills, toggleUserSkills, skillError }) => {
  const [skill, setSkill] = useState('');
  const [showSkill, setShowSkill] = useState(false);

  const searchInput = event => {
    setSkill(event.target.value);
  };

  const focusInput = () => {
    document.querySelector('.skill-input').focus();
    setShowSkill(true);
  };

  const removeSkill = (city) => {
    if (!skills.includes(city)) {
      skills.push(city)
      filterValues(city)
    }
  }

  const filterValues = (chosenSkill) => {
    for (let i = 0; i < userSkills.length; i++) {
      if (userSkills[i] === chosenSkill) {
        userSkills.splice(i, 1)
      }
    }
  }

  const renderChosenSkills = () => {
    return (userSkills.map((skill, index) => <ChosenInput key={index} city={skill} removeCity={removeSkill} />))
  }

  return (
    <UserPreferencesBox
      iconClass={'fab fa-react'}
      title={'Share with us your skills and more tech stack (max 5)'}
      paragraph={'It will be easier for us to understand you even better.Please, arrange in the hierarchy.'}
      color={'orange-dark'}
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
          {renderChosenSkills()}
          <Input
            value={skill}
            name={'skill'}
            placeholder={'Select skills'}
            className={'skill-input'}
            searchInput={searchInput}
            hideInput={() => setShowSkill(false)}
          />
        </div>
        <SkillList showSkill={showSkill} skill={skill} skills={skills} userSkills={userSkills} toggleSkills={toggleSkills} toggleUserSkills={toggleUserSkills} />
      </div>
      <div className='error' style={{ margin: '30px 0 0 0', fontSize: '18px' }}>{skillError}</div>
    </UserPreferencesBox>
  );
};

export default SkillBox;
