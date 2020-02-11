import React from 'react';
//TODO: destrukturyzacja propsów
//TODO: self closing tag
//co co Ci template string w className skoro przychodzi z propsów i powinien być stringiem

const PrefBox = ({
  heading,
  iconClass,
  title,
  paragraph,
  className,
  content
}) => {
  return (
    <div className="preferences-box">
      <header className="preferences-header">
        <div className={heading}>
          <i className={`${iconClass}`}></i>
          <h2>{title}</h2>
        </div>
        <p>{paragraph}</p>
      </header>
      <div className="preferences-jobStatus">
        <div className={className}>{content}</div>
      </div>
    </div>
  );
};

export default PrefBox;
