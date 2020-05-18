import React, { useState } from 'react'
import UserStatus from './userStatus/UserStatus';
import WelcomeUser from './welcomeUser/WelcomeUser'
import UserStatusBox from './userStatusBox/UserStatusBox'
import UserLoginOptions from './userLoginOptions/UserLoginOptions'
import { useSelector } from 'react-redux';

const UserSidebar = ({ active, toggleActive, contactsData, toggleStatus }) => {
    const isDay = useSelector(state => state.isDay);
    const [showStatus, setShowStatus] = useState(false);

    const changeStatus = () => {
        setShowStatus(!showStatus);
    };

    return (
        <div
            className={isDay ? 'userLogin-sidebar'
                : 'userLogin-sidebar userLogin-sidebarNightMode'
            }
        >
            <div className="userLogin-sidebarContent">
                <div className="userLogin-img" />
                <WelcomeUser userName={contactsData.name} />
                <UserStatus status={contactsData.userStatus} changeStatus={changeStatus} />
                <UserStatusBox showStatus={showStatus} isDay={isDay} changeStatus={changeStatus} toggleStatus={toggleStatus} />
                <UserLoginOptions active={active} toggleActive={toggleActive} />
            </div>
        </div>
    )
}

export default UserSidebar
