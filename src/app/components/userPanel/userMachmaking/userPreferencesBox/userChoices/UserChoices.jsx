import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import transitions from '@material-ui/core/styles/transitions';

const UserChoices = ({ bool, iconClass, span, b, obj, preferences }) => {
  const isDay = useSelector(state => state.isDay);

  let [state, setState] = useState([])

  const getKeys = (value) => {
    Object.keys(value).map(function (key) {
      if (value[key] === true) {
        if (key === 'all') {
          setState(`Doesn't matter`)
        } else {
          setState((prevState) => ([...prevState, key]))
        }
      };
    })

  }

  useEffect(() => {
    if (obj) {
      getKeys(obj)
    }
  }, [])

  return (
    <div className={bool ? '' : 'matchmakingPreferencesBox'}>
      <div
        className={
          isDay ? 'preferencesItem' : 'preferencesItem preferencesItemNightMode'
        }
        style={preferences ? hideBox : showBox}
      >
        <i className={iconClass} />
        <div className="preferencesText">
          <b>{b ? b : state === `Doesn't matter` ? state : state[0]}</b>
          <span>{span}</span>
        </div>
      </div>
    </div>
  );
};

const hideBox = {
  opacity: '0',
}

const showBox = {
  opacity: '1',
}


export default UserChoices;
