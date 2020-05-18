import React from 'react'
import ListItem from './listItem/ListItem';
import { userStatusBox } from '../../../../../constans'

const UserStatusBox = ({ showStatus, isDay, changeStatus, toggleStatus }) => {

    const renderUserStatus = () => {
        return userStatusBox.map((item, index) => (
            <ListItem
                key={index}
                toggleStatus={changeStatus}
                setJobStatus={toggleStatus}
                color={item.color}
                text={item.paragraph}
            />
        ));
    };

    return (
        <div
            className={
                showStatus && isDay
                    ? 'userLogin-jobStatusChanger'
                    : showStatus && isDay === false
                        ? 'userLogin-jobStatusChanger userLogin-jobStatusChangerNightMode'
                        : 'userLogin-jobStatusChanger display-none'
            }
        >
            <ul>
                {renderUserStatus()}
            </ul>
        </div>
    )
}

export default UserStatusBox
