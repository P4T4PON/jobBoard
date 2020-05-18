import React from 'react'

const UserProfileBox = ({ children, isDay, className }) => {
    return (
        <div className={`userLogin-content ${className && className}`}>
            <div
                className={
                    isDay
                        ? 'userLogin-container'
                        : 'userLogin-container userLogin-containerNightMode'
                }
            >
                <div
                    className={
                        isDay
                            ? 'userLoginContainer-content'
                            : 'userLoginContainer-content userLoginContainer-contentNightMode'
                    }
                >
                    {children}
                </div>
            </div>
        </div>
    )
}

export default UserProfileBox
