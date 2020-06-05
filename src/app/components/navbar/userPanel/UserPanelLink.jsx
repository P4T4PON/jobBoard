import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logged } from '../../../actions/index';

const UserPanelLink = ({ link, iconClass, paragraph, toggleActive, customStyle }) => {
  const isDay = useSelector(state => state.isDay);
  const dispatch = useDispatch();

  return (
    <div className='sbLinkBox' style={{ margin: customStyle }}>
      <Link to={link} style={{ width: '90%' }}>
        <div
          className={isDay ? 'sbLink sbUserProfile' : 'sbLink sbLinkNightMode sbUserProfile'}
          onClick={toggleActive}
          onClickCapture={() => link === '/' && dispatch(logged())}
        >
          <div className="userPanelIcon">
            <i className={iconClass} />
          </div>
          <p>{paragraph}</p>
        </div>
      </Link>
    </div>
  );
};

export default UserPanelLink;
