import React from 'react'

const WelcomeUser = ({ userName }) => {
    return (
        <div className="userLoginWelcome">
            <p>Welcome</p>
            <span>{userName}</span>
        </div>
    )
}

export default WelcomeUser
