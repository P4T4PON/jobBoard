import React, { useEffect } from 'react';
import './UserMachmaking.css';
import { useSelector } from 'react-redux';
import UserProfileBox from '../userProfileBox/UserProfileBox'
import UserMatchmakingHeader from './header/UserMatchmakingHeader'
import UserPreferencesBox from './userPreferencesBox/UserPreferencesBox'
import RepliesBox from './repliesBox/RepliesBox'
import MatchBox from './matchBox/MatchBox'
import MatchmakingBackdrop from './matchmakingBackdrop/MatchmakingBackdrop'

const UserPreferences = ({ toggleActive, contactsData, profileCompleted, preferencesCompleted }) => {
  const isDay = useSelector(state => state.isDay);

  useEffect(() => {
    toggleActive(2)
  }, []);

  return (
    <UserProfileBox isDay={isDay}>
      <UserMatchmakingHeader isDay={isDay} />
      <UserPreferencesBox contactsData={contactsData} />
      <RepliesBox isDay={isDay} />
      <MatchBox isDay={isDay} />
      {profileCompleted || preferencesCompleted ? <MatchmakingBackdrop contactsData={contactsData} /> : null}
    </UserProfileBox>
  );
};

export default UserPreferences;
