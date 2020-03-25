import React, { useState } from 'react';
import TechButton from '../../../additions/TechButton';
import AllCitiesButton from '../../../additions/AllCitiesButton';
import ExpLevel from '../../ExpLevel';
import { techIcons } from '../../../../../constans';
import Salary from '../../Salary';
import { useSelector } from 'react-redux';

const Technologies = ({ toggleAllTechnologies, toggleExpLevel }) => {
  const isDay = useSelector(state => state.isDay);

  const [allTechnologies, setAllTechnologies] = useState(true);
  const [active, setActive] = useState(0);

  const toggleTechnologies = () => {
    return techIcons.map((tech, index) => (
      <TechButton
        key={index}
        iconClass={tech[0]}
        iconColor={tech[1]}
        techId={index + 1}
        toggleActive={() => {
          setActive(index + 1);
          setAllTechnologies(false);
          toggleAllTechnologies(tech[3]);
        }}
        active={active}
        allTechnologies={allTechnologies}
        paragraph={tech[2]}
        isDay={isDay}
      />
    ));
  };

  return (
    <div className="filters-technologies">
      <AllCitiesButton
        city={'All'}
        toggleActive={() => {
          setAllTechnologies(true);
          toggleAllTechnologies('');
        }}
        allCities={allTechnologies}
        isDay={isDay}
      />

      {toggleTechnologies()}

      <div className="other-filters">
        <Salary isDay={isDay} />

        <ExpLevel toggleExpLevel={toggleExpLevel} isDay={isDay} />
      </div>
    </div>
  );
};

export default Technologies;
