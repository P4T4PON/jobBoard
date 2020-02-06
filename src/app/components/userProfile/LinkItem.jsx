import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

//TODO: destrukturyzacja propsow, czym jest foo? dlaczego props.active ma sie rownac 1 a nie np. props o nazwie is Active i true lub false
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
