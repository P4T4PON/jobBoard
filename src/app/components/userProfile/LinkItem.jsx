import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
const LinkItem = ({
  link,
  active,
  loginActive,
  iconClass,
  paragraph,
  linkId
}) => {
  return (
    <Fragment>
      <Link to={link}>
        <div
          className={
            active === linkId
              ? 'userLogin-Optionslist userLogin-active'
              : 'userLogin-Optionslist'
          }
          onClick={loginActive}
        >
          <i className={iconClass}></i>
          <p>{paragraph}</p>
        </div>
      </Link>
    </Fragment>
  );
};

export default LinkItem;
