import React from 'react';
//TODO : destrukturyzacja propsow
const UserDetails = props => {
  return (
    <div className="userDetails">
      <div className={props.className}>
        <h3>{props.title}</h3>
        <p>{props.paragraph}</p>
        {props.content}
      </div>
    </div>
  );
};

export default UserDetails;
