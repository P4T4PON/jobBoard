import React from 'react';
import './UserSignIn.css';

const UserSignIn = ({ className, children }) => {
  return (
    <div className="userSignIn">
      <div className="blocker" />
      <div className={`card ${className}`}>
        <h1>justjoin.it</h1>
        {children}
      </div>
    </div>
  );
};

export default UserSignIn;
