import React from 'react';

const BrandTechBtn = ({
  paragraph,
  toggleActive,
  active,
  brandId,
  iconClass,
  className,
  allTechnologies
}) => {
  return (
    <div
      className={
        allTechnologies || active === brandId
          ? `brandButton ${className}`
          : `brandButton ${className} unAct`
      }
      onClick={toggleActive}
    >
      <i className={iconClass}></i>
      <p>{paragraph}</p>
    </div>
  );
};

export default BrandTechBtn;
