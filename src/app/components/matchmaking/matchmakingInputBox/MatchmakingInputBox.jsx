import React from 'react'

const MatchmakingInputBox = ({ children, isDay, error }) => {
    return (
        <div
            className={
                isDay && error !== ''
                    ? 'cont inputError'
                    : isDay === false && error !== ''
                        ? 'cont contNightMode inputError'
                        : isDay
                            ? 'cont'
                            : 'cont contNightMode'
            }
        >
            {children}
        </div>
    )
}

export default MatchmakingInputBox
