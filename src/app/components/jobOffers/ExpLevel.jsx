import React, { useState } from 'react';

const ExpLevel = () => {
  const [showExpLevel, setShowExpLevel] = useState(false);
  const [expLevelChosen, setExpLevelChosen] = useState(false);

  const changeExpLevel = event => {
    document.getElementById('expLevelButton').children[1].innerText =
      event.target.innerText;
    setExpLevelChosen(true);
    setShowExpLevel(false);
  };

  const resetExpLevel = () => {
    const exp = document.getElementById('expLevelButton');
    exp.children[1].innerText = 'Exp. level';
    exp.className = 'city-button min-width120 all';
    setShowExpLevel(false);
    setExpLevelChosen(false);
  };

  return (
    <div className="allSidebars">
      <div
        className={
          expLevelChosen
            ? 'city-button min-width120 all'
            : 'city-button min-width120'
        }
        id="expLevelButton"
        onClick={() => setShowExpLevel(!showExpLevel)}
      >
        <i className="fas fa-chart-line"></i>
        <p>Exp. level</p>
        <i className="fas fa-chevron-down"></i>
      </div>

      <div className={showExpLevel ? 'expLevel op1' : 'expLevel op0'}>
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
