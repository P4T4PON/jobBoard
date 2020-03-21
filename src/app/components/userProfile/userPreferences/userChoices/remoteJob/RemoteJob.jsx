import React, { useState } from 'react';
import UserPreferencesHeader from '../../UserPreferencesHeader';
import RemoteJobBtn from './RemoteJobBtn';

const RemoteJob = ({ isDay }) => {
  const [remoteActive, setRemoteActive] = useState(0);
  return (
    <div
      className={
        isDay ? 'preferences-box' : 'preferences-box preferences-boxNightMode'
      }
    >
      <UserPreferencesHeader
        heading={
          isDay
            ? 'preferences-heading light-blue'
            : 'preferences-heading preferences-headingNightMode light-blue'
        }
        className={'display-flex'}
        iconClass={'fas fa-umbrella-beach'}
        title={'Are you willing to work remotely?'}
        paragraph={'We will try to find you an attractive remote job.'}
      />
      <div className="preferences-jobStatus">
        <div className={'jobStatus-box'}>
          <RemoteJobBtn
            text={'Yes'}
            setRemoteActive={() => setRemoteActive(1)}
            remoteActive={remoteActive}
            remoteJob={1}
            className={'mr-10'}
            isDay={isDay}
          />
          <RemoteJobBtn
            text={'No'}
            setRemoteActive={() => setRemoteActive(2)}
            remoteActive={remoteActive}
            remoteJob={2}
            isDay={isDay}
          />
        </div>
      </div>
    </div>
  );
};

export default RemoteJob;
