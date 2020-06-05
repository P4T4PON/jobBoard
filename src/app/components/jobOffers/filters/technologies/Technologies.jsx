import React, { useState, Fragment } from 'react';
import TechButton from '../../../additions/TechButton';
import AllCitiesButton from '../../../additions/AllCitiesButton';
import { techIcons } from '../../../../../constans';
import { useSelector } from 'react-redux';

const Technologies = ({ toggleAllTechnologies, linkTo }) => {
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
          toggleAllTechnologies(tech[3], '');
        }}
        active={active}
        allTechnologies={allTechnologies}
        tech={tech}
        isDay={isDay}
      />
    ));
  };

  return (
    <Fragment>
      <AllCitiesButton
        city={'All'}
        toggleActive={() => {
          setAllTechnologies(true);
          toggleAllTechnologies('', '');
        }}
        allCities={allTechnologies}
        isDay={isDay}
        linkTo={linkTo}
      />
      {toggleTechnologies()}
    </Fragment>
  );
};

export default Technologies;
