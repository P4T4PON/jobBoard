import React from 'react'

const ResetPasswordBox = ({ children, isDay }) => {

    return (
        <div className={isDay ? 'reset' : 'reset loggingBoxNightMode'}>
            <div className={isDay ? 'reset-body' : 'reset-body reset-bodyNightMode'}>
                <h1>Reset password</h1>
                <h2>Type your email to get password reset url.</h2>
                {children}
            </div>
        </div>
    )
}

export default ResetPasswordBox
