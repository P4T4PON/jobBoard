import React from 'react';
import UserPreferencesBox from '../../userPreferencesBox/UserPreferencesBox'
import JobStatusContent from './jobStatusContent/JobStatusContent'

const JobStatusBox = ({ isDay, userStatus, toggleStatus }) => {
  return (
    <UserPreferencesBox
      iconClass={'far fa-eye'}
      title={"Ok, let's start! What is your status in job search?"}
      paragraph={'Let us know if we should look for the best job on the market for you.'}
      color={'yellow'}>
      <JobStatusContent isDay={isDay} userStatus={userStatus} toggleStatus={toggleStatus} />
    </UserPreferencesBox>
  );
};

export default JobStatusBox;
