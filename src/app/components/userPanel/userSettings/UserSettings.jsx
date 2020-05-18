import React, { useState, useEffect } from 'react';
import SubmitButton from '../../additions/SubmitButton';
import UserProfileBox from '../userProfileBox/UserProfileBox'
import './UserSettings.css';
import PasswordChangeBox from './passwordChangeBox/PasswordChangeBox'
import DeleteAcc from './deleteAcc/DeleteAcc'
import { useSelector } from 'react-redux';

const UserSettings = ({ toggleActive, togglePassword, password }) => {
  const isDay = useSelector(state => state.isDay);

  const [userPassword, setUserPassword] = useState({ oldPassword: '', newPassword: '' })
  const [oldPasswordError, setOldPasswordError] = useState('')
  const [newPasswordError, setNewPasswordError] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setUserPassword((prevInputData) => ({ ...prevInputData, [name]: value }))
    if (value.length === 0) {
      if (name === 'oldPassword') {
        setOldPasswordError('Old password is a required field')
      } else {
        setNewPasswordError('New password is a required field')
      }
    }
    else if (value.length < 6) {
      if (name === 'oldPassword') {
        setOldPasswordError('Old password must be at least 6 characters')
      } else {
        setNewPasswordError('New password must be at least 6 characters')
      }
    } else if (value.length >= 6) {
      if (name === 'oldPassword') {
        setOldPasswordError('')
      } else {
        setNewPasswordError('')
      }
    }
  }

  const changePassword = () => {
    if (oldPasswordError === '' && newPasswordError === '') {
      if (userPassword.oldPassword === password && userPassword.newPassword === password) {
        alert(`new Password can't be the same as old one`)
        setUserPassword({ oldPassword: '', newPassword: '' })
      }
      else if (userPassword.oldPassword === password) {
        togglePassword(userPassword.newPassword)
        setUserPassword({ oldPassword: '', newPassword: '' })
        alert('password changed')
      }
    }
  };


  useEffect(() => {
    toggleActive(4)
  }, []);

  return (
    <UserProfileBox isDay={isDay} className={'userSettingsContainer'}>
      <div className="userSettings-content">
        <h1>Settings</h1>

        <PasswordChangeBox
          isDay={isDay}
          oldPassword={userPassword.oldPassword}
          newPassword={userPassword.newPassword}
          handleChange={handleChange}
          oldPasswordError={oldPasswordError}
          newPasswordError={newPasswordError}
        />
        <DeleteAcc isDay={isDay} />

        <SubmitButton
          value={'Update profile'}
          className={'pink-button'}
          submit={changePassword}
        />
      </div>
    </UserProfileBox>
  );
};

export default UserSettings;
