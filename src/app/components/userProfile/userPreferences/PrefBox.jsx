import React from 'react';

const PrefBox = props => {
  return (
    <div className="preferences-box">
      <header className="preferences-header">
        <div className={props.heading}>
          <i className={`${props.iconClass}`}></i>
          <h2>{props.title}</h2>
        </div>
        <p>{props.paragraph}</p>
      </header>
      <div className="preferences-jobStatus">
        <div className={props.className}>{props.content}</div>
      </div>
    </div>
  );
};

export default PrefBox;
