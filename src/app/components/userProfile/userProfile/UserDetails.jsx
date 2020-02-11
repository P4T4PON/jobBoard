import React from 'react';

const UserDetails = ({ className, paragraph, content, title }) => {
  return (
    <div className="userDetails">
      <div className={className}>
        <h3>{title}</h3>
        <p>{paragraph}</p>
        {content}
      </div>
    </div>
  );
};

export default UserDetails;
