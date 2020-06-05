import React from 'react';

const PrefBox = ({
  heading,
  iconClass,
  title,
  paragraph,
  className,
  content
}) => {
  return (
    <div className="preferencesBox">
      <header className="preferencesHeader">
        <div className={heading}>
          <i className={iconClass}></i>
          <h2>{title}</h2>
        </div>
        <p>{paragraph}</p>
      </header>
      <div className="preferencesJobStatus">
        <div className={className}>{content}</div>
      </div>
    </div>
  );
};

export default PrefBox;
