import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TechButton = ({
  iconColor,
  toggleActive,
  active,
  techId,
  paragraph,
  iconClass,
  allTechnologies,
  isDay,
  tech
}) => {
  const [showTechnology, setShowTechnology] = useState(false)

  return (
    <div className='techShuffler'>
      {showTechnology && <div className='techShower'>{tech[2]}</div>}
      <Link to='/' className={isDay ? "cityLink" : 'cityLink cityLinkNightMode'}>
        <div onMouseOver={() => setShowTechnology(true)} onMouseLeave={() => setShowTechnology(false)}>
          <div
            className={
              allTechnologies || techId === active
                ? `techButton iconSelf ${iconColor} bgPoz0`
                : `techButton iconSelf ${iconColor} bgPoz0 unAct`
            }
            onClick={toggleActive}
          >
            <i className={iconClass} />
          </div>
          <div className="centerNote">
            <p>{paragraph}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TechButton;
