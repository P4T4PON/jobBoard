import React from 'react';
import { Link } from 'react-router-dom';
const UserPanelLink = ({ link, setUserPanel_active, iconClass, paragraph }) => {
  return (
    <Link to={link}>
      <div className={'sb-link sb-userProfile'} onClick={setUserPanel_active}>
        <div className="userPanel-icon">
          <i className={iconClass}></i>
        </div>
        <p className="link-paragraph">{paragraph}</p>
      </div>
    </Link>
  );
};

export default UserPanelLink;
