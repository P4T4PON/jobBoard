import React from 'react';

const UserChoices = props => {
  return (
    <div className={props.bool ? '' : 'preferencesBox'}>
      <div className="preferencesItem">
        <i className={props.iconClass}></i>
        <div className="preferencesText">
          <b>{props.b}</b>
          <span>{props.span}</span>
        </div>
      </div>
    </div>
  );
};

export default UserChoices;
