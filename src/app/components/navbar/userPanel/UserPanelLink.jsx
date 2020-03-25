import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const UserPanelLink = ({ link, setUserPanel_active, iconClass, paragraph }) => {
  const isDay = useSelector(state => state.isDay);
  return (
    <Link to={link}>
      <div
        className={isDay ? 'sb-link sb-userProfile' : 'sb-link sb-linkNightMode sb-userProfile'}
        onClick={setUserPanel_active}>
        <div className="userPanel-icon">
          <i className={iconClass} />
        </div>
        <p className="link-paragraph">{paragraph}</p>
      </div>
    </Link>
  );
};

export default UserPanelLink;
