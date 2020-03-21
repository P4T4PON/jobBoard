import React from 'react';
import { Link } from 'react-router-dom';
const MachmakingLink = ({ text, link, linkText, isDay }) => {
  return (
    <div className={isDay ? 'register' : 'register registerNightMode'}>
      <h2>
        {text} <Link to={link}> {linkText}</Link>
      </h2>
      <div className="input-line" />
      <Link to={'/devs/reset-password'}>Forgot password?</Link>
    </div>
  );
};

export default MachmakingLink;
