import React from 'react';

const AllTechnologiesButton = ({
  toggleActive,
  paragraph,
  allTechnologies
}) => {
  return (
    <div className="techButtonBox">
      <div
        className={
          allTechnologies
            ? 'techButton iconSelf padd all'
            : 'techButton iconSelf padd'
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
