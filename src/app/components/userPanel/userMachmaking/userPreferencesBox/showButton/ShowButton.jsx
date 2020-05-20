import React from 'react';

const ShowButton = ({ showPreferences, preferences }) => {
  return (
    <div className="showLess">
      <div className={preferences ? "showLessButton" : "showLessButton showMore"} onClick={showPreferences}>
        {preferences ? 'Show more' : 'Show less'}

        <i
          className={preferences ? 'fas fa-chevron-down' : 'fas fa-chevron-up'}
        />
      </div>
    </div>
  );
};

export default ShowButton;
