import React from 'react'
import { useSelector } from 'react-redux';

const UserPreferencesBox = ({ children, title, color, paragraph, iconClass }) => {
    const isDay = useSelector(state => state.isDay);
    return (
        <div
            className={
                isDay ? 'preferencesBox' : 'preferencesBox preferencesBoxNightMode'
            }
        >
            <header className="preferencesHeader">
                <div className={isDay
                    ? `preferencesHeading ${color}`
                    : `preferencesHeading ${color} preferencesHeadingNightMode`}>
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
