import React, { useEffect } from 'react';
import './UserProfile.css';
import UserDetails from './userDetails/UserDetails';
import SubmitButton from '../../additions/SubmitButton';
import { useSelector } from 'react-redux';
import UserDetailsContent from './userDetailsContent/UserDetailsContent'
import AdditionalInfoBox from './additionalInfoBox/AdditionalInfoBox'
import UserProfieBox from '../userProfileBox/UserProfileBox'

const UserProfile = ({ toggleExperiance, toggleActive, inputData, handleSubmit, toggleProfile, handleChange, linkedinError, githubError }) => {
  const isDay = useSelector(state => state.isDay);

  useEffect(() => {
    toggleActive(1)
  }, []);

  return (
    <UserProfieBox isDay={isDay}>
      <h1>My profile</h1>
      <p>{'Complete your profile & apply with just one click!'}</p>
      <form className="myProfileContent">
        <UserDetails
          className={'userDetails'}
          title={'USER DETAILS'}>
          <UserDetailsContent
            isDay={isDay}
            inputData={inputData}
            handleChange={handleChange}
          />
        </UserDetails>
        <AdditionalInfoBox
          isDay={isDay}
          inputData={inputData}
          handleChange={handleChange}
          linkedinError={linkedinError}
          githubError={githubError}
          toggleExperiance={toggleExperiance}
        />
      </form>
      <SubmitButton value={'Update profile'} className={'pinkButton'} submit={handleSubmit} />
    </UserProfieBox>
  );
};

export default UserProfile;
