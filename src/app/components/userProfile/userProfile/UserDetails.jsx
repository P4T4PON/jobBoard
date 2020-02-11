import React from 'react';
<<<<<<< HEAD

const UserDetails = ({ className, paragraph, content, title }) => {
=======
//TODO : destrukturyzacja propsow
const UserDetails = props => {
>>>>>>> 4f0708403c7b6ddc8efea0c79cfa27980e0a2800
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
