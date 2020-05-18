import React from 'react'

const LoginIcon = ({ isDay, iconClass }) => {
    return (
        <div>
            <i
                className={
                    isDay
                        ? `${iconClass ? iconClass : 'fas fa-user'} loginIcon`
                        : `${iconClass ? iconClass : 'fas fa-user'} loginIcon loginIconNightMode`
                }
            />
        </div>
    )
}

export default LoginIcon
