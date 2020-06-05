import React from 'react';
import { userStatus } from '../../../../../constans'

const UserStatus = ({ status, changeStatus }) => {
  const { iconClass, paragraph, color } = userStatus[status]
  return (
    <div
      className={`userLoginJobStatus ${color} bg-${color}`}
      onClick={changeStatus}
    >
      <i className={iconClass} />
      <p>{paragraph}</p>
      <i className={`fas fa-chevron-down small-chew ${color}`} />
    </div>
  );
};

export default UserStatus;
