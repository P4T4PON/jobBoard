import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { logged } from '../../../../../actions/index';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const LinkItem = ({
  link,
  active,
  iconClass,
  paragraph,
  linkId,
  toggleActive
}) => {
  const isDay = useSelector(state => state.isDay);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <Link to={link}>
        <div
          className={
            active === linkId
              ? 'userLoginOptionslist userLoginActive' :
              isDay === false ?
                'userLoginOptionslist userLoginOptionslistNightMode' :
                'userLoginOptionslist'
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
