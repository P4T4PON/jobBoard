import React, { useEffect } from 'react';
import SubmitButton from '../../additions/SubmitButton';
import 'react-input-range/lib/css/index.css';
import JobStatusBox from './userChoices/jobStatusBox/JobStatusBox';
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
import UserProfileBox from '../userProfileBox/UserProfileBox'
import './UserPreferences.css';

const UserPreferences = ({ toggleActive, toggleStatus, searchCities,
  toggleRemote, toggleCompanyStage, toggleCompanyKind, toggleIndustry,
  toggleSeniority, toggleEmployment, toggleSalary, toggleTechnologies,
  toggleSkills, handleSubmit, inputData, toggleCities,
  toggleUserTechnologies, toggleUserSkills,
  cityError, remoteError, stageError, kindError,
  industryError, seniorityError, employmentError,
  salaryError, technologyError, skillError
}) => {
  const isDay = useSelector(state => state.isDay);

  useEffect(() => {
    toggleActive(3)
  }, []);

  return (
    <UserProfileBox isDay={isDay}>
      <h1>Preferences</h1>
      <JobStatusBox isDay={isDay} userStatus={inputData.userStatus} toggleStatus={toggleStatus} />

      <WorkPlaceBox isDay={isDay} userCities={inputData.userCities} searchCities={searchCities} cities={inputData.cities} toggleCities={toggleCities} cityError={cityError} />

      <RemoteJob isDay={isDay} toggleRemote={toggleRemote} remote={inputData.remote} remoteError={remoteError} />

      <CompanyStageBox isDay={isDay} userCompanyStage={inputData.companyStage} toggleCompanyStage={toggleCompanyStage} stageError={stageError} />

      <CompanyKindBox isDay={isDay} userCompanyKind={inputData.companyKind} toggleCompanyKind={toggleCompanyKind} kindError={kindError} />

      <IndustryBox isDay={isDay} userIndustry={inputData.industry} toggleIndustry={toggleIndustry} industryError={industryError} />

      <SeniorityBox isDay={isDay} userSeniority={inputData.seniority} toggleSeniority={toggleSeniority} seniorityError={seniorityError} />

      <EmploymentTypeBox isDay={isDay} userEmployment={inputData.employment} toggleEmployment={toggleEmployment} employmentError={employmentError} />

      <SalaryBox isDay={isDay} userSalary={inputData.salary} toggleSalary={toggleSalary} salaryError={salaryError} />

      <TechnologiesBox isDay={isDay} userTechnologies={inputData.userTechnologies} toggleTechnologies={toggleTechnologies}
        technologies={inputData.technologies} toggleUserTechnologies={toggleUserTechnologies} technologyError={technologyError} />

      <SkillBox isDay={isDay} skills={inputData.skills} toggleSkills={toggleSkills} userSkills={inputData.userSkills}
        toggleUserSkills={toggleUserSkills} skillError={skillError} />

      <SubmitButton value={'Update'} className={'pinkButton'} submit={handleSubmit} />

    </UserProfileBox>
  );
};

export default UserPreferences;
