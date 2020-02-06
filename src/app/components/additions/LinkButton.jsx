import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
const LinkButton = props => {
  return (
    <Fragment>
      <Link to={props.link}>
        <div className={props.className}>
          <p>{props.text}</p>
        </div>
      </Link>
    </Fragment>
  );
};

export default LinkButton;
