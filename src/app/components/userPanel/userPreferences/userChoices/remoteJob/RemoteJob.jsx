import React, { useState } from 'react';
import RemoteJobBtn from './RemoteJobBtn';
import UserPreferencesBox from '../../userPreferencesBox/UserPreferencesBox'

const RemoteJob = ({ isDay, toggleRemote, remote, remoteError }) => {
  const [inputOptions, setInputOptions] = useState([{ text: 'Yes' }, { text: 'No' }])

  const renderRemoteButtons = () => {
    return (inputOptions.map((option, index) =>
      <RemoteJobBtn
        key={index}
        text={option.text}
        toggleRemoteActive={() => toggleRemote(option.text)}
        remoteJob={remote}
        className={'mr-10'}
        isDay={isDay}
      />
    ))
  }

  return (
    <UserPreferencesBox
      className={'display-flex'}
      iconClass={'fas fa-umbrella-beach'}
      title={'Are you willing to work remotely?'}
      paragraph={'We will try to find you an attractive remote job.'}
      color={'light-blue'}
    >
      <div className="preferences-jobStatus">
        <div className='jobStatus-box'
        >
          {renderRemoteButtons()}
        </div>
      </div>
      <div className='error' style={{ margin: '10px 0 0 0', fontSize: '18px' }}>{remoteError}</div>
    </UserPreferencesBox>
  );
};

export default RemoteJob;
