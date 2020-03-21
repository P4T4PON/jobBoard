import React, { useState } from 'react';
import SubmitButton from '../../additions/SubmitButton';
import 'react-input-range/lib/css/index.css';
import UserPanel from '../UserPanel';
import JobStatusBox from './userChoices/jobStatus/JobStatusBox';
import CompanyStageBox from './userChoices/companyStage/CompanyStageBox';
import RemoteJob from './userChoices/remoteJob/RemoteJob';
import CompanyKindBox from './userChoices/companyKind/CompanyKindBox';
import IndustryBox from './userChoices/industry/IndustryBox';
import SeniorityBox from './userChoices/seniority/SeniorityBox';
import EmploymentTypeBox from './userChoices/employmentType/EmploymentTypeBox';
import SalaryBox from './userChoices/salary/SalaryBox';
import WorkPlaceBox from './userChoices/workPlace/WorkPlaceBox';
import TechnologiesBox from './userChoices/technologies/TechnologiesBox';
import SkillBox from './userChoices/skills/SkillBox';
import { useSelector } from 'react-redux';

import './UserPreferences.css';

const UserPreferences = () => {
  const isDay = useSelector(state => state.isDay);
  const [panelActive] = useState(3);
  const [statusValue] = useState('');

  return (
    <div className="userLogin-content vw-99">
      <UserPanel active={panelActive} inputValue={statusValue} />
      <div
        className={isDay ? 'preferences' : 'preferences preferencesNightMode'}
      >
        <div
          className={
            isDay
              ? 'preferences-content'
              : 'preferences-content preferences-contentNightMode'
          }
        >
          <h1>Preferences</h1>
          <JobStatusBox isDay={isDay} />

          <WorkPlaceBox isDay={isDay} />

          <RemoteJob isDay={isDay} />

          <CompanyStageBox isDay={isDay} />

          <CompanyKindBox isDay={isDay} />

          <IndustryBox isDay={isDay} />

          <SeniorityBox isDay={isDay} />

          <EmploymentTypeBox isDay={isDay} />

          <SalaryBox isDay={isDay} />

          <TechnologiesBox isDay={isDay} />

          <SkillBox isDay={isDay} />

          <SubmitButton value={'Update'} className={'pink-button'} />
        </div>
      </div>
    </div>
  );
};

export default UserPreferences;
