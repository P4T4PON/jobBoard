import React from 'react';
import { Link } from 'react-router-dom';
const MachmakingLink = ({ text, link, linkText }) => {
  return (
    <div className="register">
      <h2>
        {text} <Link to={link}>{linkText}</Link>
      </h2>
      <Link to={'/devs/reset-password'}>Forgot password?</Link>
    </div>
  );
};

export default MachmakingLink;
