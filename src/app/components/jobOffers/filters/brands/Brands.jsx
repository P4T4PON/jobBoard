import React, { useState } from 'react';
import BrandTechBtn from '../../../brandStories/techButtons/BrandTechBtn';
import AllCitiesButton from '../../../additions/AllCitiesButton';
import { brandTechBtn } from '../../../../../constans';

const Brands = () => {
  const [active, setActive] = useState(0);
  const [allTechnologies, setAllTechnologies] = useState(true);

  const toggleTechnologies = () => {
    return brandTechBtn.map((tech, index) => (
      <BrandTechBtn
        key={index}
        className={tech[0]}
        iconClass={tech[1]}
        brandId={index + 1}
        toggleActive={() => {
          setActive(index + 1);
          setAllTechnologies(false);
        }}
        active={active}
        allTechnologies={allTechnologies}
        paragraph={tech[2]}
      />
    ));
  };
  return (
    <div className="filtersBrands">
      <AllCitiesButton
        toggleActive={() => setAllTechnologies(true)}
        allCities={allTechnologies}
        city={'All'}
      />
      {toggleTechnologies()}
    </div>
  );
};

export default Brands;
