import React from 'react'

const Input = ({ type, name, isDay, value, checkInputLength, checkInputBlurLength, span }) => {
    return (
        <div>
            <input
                type={type ? type : 'text'}
                name={name}
                autoComplete="off"
                required
                className={type && isDay ? 'big'
                    : type && isDay === false
                        ? 'big bigNightMode'
                        : 'small'}
                value={value}
                onChange={checkInputLength}
                onBlur={checkInputBlurLength}
            />
            <label htmlFor="email" className="labelName">
                <span className="contentName">{span}</span>
            </label>
        </div>
    )
}

export default Input
