import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
const LinkItem = props => {
  return (
    <Fragment>
      <Link to={props.link}>
        <div
          className={
            props.active === 1
              ? 'userLogin-Optionslist userLogin-active'
              : 'userLogin-Optionslist'
          }
          onClick={props.fooOnClick}
        >
          <i className={props.iconClass}></i>
          <p>{props.paragraph}</p>
        </div>
      </Link>
    </Fragment>
  );
};

export default LinkItem;
