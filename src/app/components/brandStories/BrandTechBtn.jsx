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
          ? `brand-button ${className}`
          : `brand-button ${className} unAct`
      }
      onClick={toggleActive}
    >
      <i className={iconClass} />
      <p>{paragraph}</p>
    </div>
  );
};

export default BrandTechBtn;
