import React from 'react';

const ShowButton = ({ showPreferences, preferences }) => {
  return (
    <div className="showLess">
      <div className="showLess-button" onClick={showPreferences}>
        {preferences ? 'Show more' : 'Show less'}

        <i
          className={preferences ? 'fas fa-chevron-down' : 'fas fa-chevron-up'}
        ></i>
      </div>
    </div>
  );
};

export default ShowButton;
