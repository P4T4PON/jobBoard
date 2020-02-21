import React from 'react';

const AllTechnologiesButton = ({
  toggleActive,
  paragraph,
  allTechnologies
}) => {
  return (
    <div className="tech-buttonBox">
      <div
        className={
          allTechnologies
            ? 'tech-button icon-self padd all'
            : 'tech-button icon-self padd'
        }
        onClick={toggleActive}
      />
      <div className="centerNote">
        <p>{paragraph}</p>
      </div>
    </div>
  );
};
export default AllTechnologiesButton;
