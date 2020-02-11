import React from 'react';

const ExpLevel = ({ showExpLevel, changeExpLevel, setShowExpLevel }) => {
  return (
    <div className="allSidebars">
      <div
        className="city-button min-width120"
        id="expLevelButton"
        onClick={() => setShowExpLevel(!showExpLevel)}
      >
        <i className="fas fa-chart-line"></i>
        <p>Exp. level</p>
        <i className="fas fa-chevron-down"></i>
      </div>

      <div className={showExpLevel ? 'expLevel op1' : 'expLevel op0'}>
        <ul className={showExpLevel ? 'op1' : 'op0'}>
          <li onClick={changeExpLevel}>All</li>
          <li onClick={changeExpLevel}>Junior</li>
          <li onClick={changeExpLevel}>Mid</li>
          <li onClick={changeExpLevel}>Senior</li>
        </ul>
      </div>
    </div>
  );
};

export default ExpLevel;
