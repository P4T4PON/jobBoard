import React from 'react'

const PasswordShower = ({ isDay, toggleInput }) => {
    return (
        <div
            className={
                isDay
                    ? 'passwordShower'
                    : 'passwordShower passwordShowerNightMode'
            }
            onClick={toggleInput}
        >
            <i className="fas fa-eye" />
        </div>
    )
}

export default PasswordShower
