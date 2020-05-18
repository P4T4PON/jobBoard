import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { logged } from '../../../../../actions/index';
import { useDispatch } from 'react-redux';

const LinkItem = ({
  link,
  active,
  iconClass,
  paragraph,
  linkId,
  toggleActive
}) => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <Link to={link}>
        <div
          className={
            active === linkId
              ? 'userLogin-Optionslist userLogin-active'
              : 'userLogin-Optionslist'
          }
          onClick={() => toggleActive(linkId)}
          onMouseUp={() => linkId === 5 && dispatch(logged())}
        >
          <i className={iconClass}></i>
          <p>{paragraph}</p>
        </div>
      </Link>
    </Fragment>
  );
};

export default LinkItem;
