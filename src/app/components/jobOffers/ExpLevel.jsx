import React, { useState } from 'react';

const ExpLevel = ({ toggleExpLevel, isDay }) => {
  const [showExpLevel, setShowExpLevel] = useState(false);
  const [expLevelChosen, setExpLevelChosen] = useState(false);
  const [expLevel, setExpLevel] = useState('');

  const changeExpLevel = event => {
    setExpLevel(event.target.innerText);
    setExpLevelChosen(true);
    setShowExpLevel(false);
    toggleExpLevel(event.target.innerText);
  };

  const resetExpLevel = () => {
    setExpLevel('');
    setShowExpLevel(false);
    setExpLevelChosen(false);
    toggleExpLevel('');
  };

  return (
    <div className="allSidebars">
      <div
        className={
          expLevelChosen
            ? 'city-button min-width120 all'
            : isDay === false
            ? 'city-buttonNightMode min-width120'
            : 'city-button min-width120'
        }
        id="expLevelButton"
        onClick={() => setShowExpLevel(!showExpLevel)}
      >
        <i className="fas fa-chart-line" />
        <p>{expLevel === '' ? 'Exp. level' : expLevel}</p>
        <i className="fas fa-chevron-down" />
      </div>

      <div
        className={
          isDay && showExpLevel
            ? 'expLevel op1'
            : isDay === false && showExpLevel
            ? 'expLevel expLevelNightMode op1'
            : 'expLevel op0'
        }
      >
        <ul className={showExpLevel ? 'op1' : 'op0'}>
          <li onClick={resetExpLevel}>All</li>
          <li onClick={changeExpLevel}>Junior</li>
          <li onClick={changeExpLevel}>Mid</li>
          <li onClick={changeExpLevel}>Senior</li>
        </ul>
      </div>
    </div>
  );
};

export default ExpLevel;
