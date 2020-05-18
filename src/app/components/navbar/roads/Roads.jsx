import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import NavLink from './navLink/NavLink';
import TitleLink from './titleLink/TitleLink'
import JustGeekIt from './justGeekIt/JustGeekIt'
import { roads } from '../../../../constans'

const Roads = ({ changeBrands, isDay }) => {
  const [active, setActive] = useState(0)
  const isLogged = useSelector(state => state.isLogged);

  const toggleActive = (newActive) => {
    setActive(newActive)
  }

  const renderRoads = () => {
    return roads.map((road, index) =>
      <NavLink
        key={index}
        link={road.link}
        iconClass={road.iconClass}
        text={road.text}
        toggleActive={toggleActive}
        linkId={index}
        active={active}
        changeBrands={changeBrands}
        isLogged={isLogged}
      />
    )
  }

  return (
    <div className='roadBox'>
      <TitleLink isDay={isDay} toggleActive={toggleActive} changeBrands={changeBrands} />
      {renderRoads()}
      <JustGeekIt active={active} />
    </div>
  );
};

export default Roads;







