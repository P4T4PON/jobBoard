import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
const LinkItem = ({ link, active, loginActive, iconClass, paragraph }) => {
=======

//TODO: destrukturyzacja propsow, czym jest foo? dlaczego props.active ma sie rownac 1 a nie np. props o nazwie is Active i true lub false
const LinkItem = props => {
>>>>>>> 4f0708403c7b6ddc8efea0c79cfa27980e0a2800
  return (
    <Fragment>
      <Link to={link}>
        <div
          className={
            active === 1
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
