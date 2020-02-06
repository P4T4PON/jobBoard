import React from 'react';
//TODO: destrukturyzacja propsów
//TODO: self closing tag
//co co Ci template string w className skoro przychodzi z propsów i powinien być stringiem

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
