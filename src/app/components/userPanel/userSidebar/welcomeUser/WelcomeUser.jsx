import React from 'react'

const WelcomeUser = ({ userName }) => {
    return (
        <div className="userLogin-welcome">
            <p>Welcome</p>
            <span>{userName}</span>
        </div>
    )
}

export default WelcomeUser
