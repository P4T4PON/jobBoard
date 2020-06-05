import React from 'react'
import AnimatedInput from '../../../additions/AnimatedInput';

const PasswordChangeBox = ({ isDay, oldPassword, newPassword, oldPasswordError, newPasswordError, handleChange }) => {

    return (
        <div className="passwordChange">
            <div
                className={
                    isDay
                        ? 'passwordChangeContent'
                        : 'passwordChangeContent passwordChangeContentNightMode'
                }
            >
                <h2 style={{ margin: '0' }}>Set up new password</h2>
                <p style={{ margin: '0 0 40px 0' }}>Follow the instructions below</p>

                <div className="passwordChangeBox">
                    <div style={{ marginBottom: '10px' }}>
                        <AnimatedInput
                            iconClass={'fas fa-lock mediaIcon'}
                            inputClass={'fas fa-lock  loginIcon'}
                            className={isDay ? 'cont' : 'cont upiNightMode contNightMode'}
                            type={'password'}
                            name={'oldPassword'}
                            value={oldPassword}
                            checkInputLength={handleChange}
                            checkInputBlurLength={handleChange}
                            span={'Old password'}
                            isDay={isDay}
                            error={oldPasswordError}
                        />
                    </div>

                    <AnimatedInput
                        iconClass={'fas fa-lock mediaIcon'}
                        inputClass={'fas fa-lock  loginIcon'}
                        className={isDay ? 'cont' : 'cont upiNightMode contNightMode'}
                        type={'password'}
                        name={'newPassword'}
                        value={newPassword}
                        checkInputLength={handleChange}
                        checkInputBlurLength={handleChange}
                        span={'New password'}
                        isDay={isDay}
                        error={newPasswordError}
                    />
                </div>
            </div>
        </div>

    )
}

export default PasswordChangeBox
