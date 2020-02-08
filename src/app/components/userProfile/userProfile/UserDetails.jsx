import React from 'react';

const UserDetails = ({ className, paragraph, content }) => {
  return (
    <div className="userDetails">
      <div className={className}>
        <h3>{className}</h3>
        <p>{paragraph}</p>
        {content}
      </div>
    </div>
  );
};

export default UserDetails;
