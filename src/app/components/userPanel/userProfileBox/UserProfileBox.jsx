import React from 'react'

const UserProfileBox = ({ children, isDay, className }) => {
    return (
        <div className={`userLoginContent ${className && className}`}>
            <div
                className={
                    isDay
                        ? 'userLoginContainer'
                        : 'userLoginContainer userLoginContainerNightMode'
                }
            >
                <div
                    className={
                        isDay
                            ? 'userLoginContainerContent'
                            : 'userLoginContainerContent userLoginContainerContentNightMode'
                    }
                >
                    {children}
                </div>
            </div>
        </div>
    )
}

export default UserProfileBox
