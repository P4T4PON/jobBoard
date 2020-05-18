import React from 'react'
import { useSelector } from 'react-redux';

const UserPreferencesBox = ({ children, title, color, paragraph, iconClass }) => {
    const isDay = useSelector(state => state.isDay);
    return (
        <div
            className={
                isDay ? 'preferences-box' : 'preferences-box preferences-boxNightMode'
            }
        >
            <header className="preferences-header">
                <div className={isDay
                    ? `preferences-heading ${color}`
                    : `preferences-heading ${color} preferences-headingNightMode`}>
                    <i className={iconClass}></i>
                    <h2>{title}</h2>
                </div>
                <p>{paragraph}</p>
            </header>
            {children}
        </div>
    )
}

export default UserPreferencesBox
