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
    <div className="preferences-box">
      <header className="preferences-header">
        <div className={heading}>
          {/*  TODO: tag*/}
          <i className={iconClass}></i>
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
