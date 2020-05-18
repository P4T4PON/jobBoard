import React from 'react'

const TextArea = ({ isDay, handleChange, story }) => {
    return (
        <div
            className={
                isDay
                    ? 'cont upi biggInput'
                    : 'cont upi upiNightMode biggInput biggInputNightMode'
            }
        >
            <div className="big-input">
                <textarea
                    type="text"
                    name="story"
                    autoComplete="off"
                    spellCheck="false"
                    required
                    value={story}
                    onChange={handleChange}
                />
                <label htmlFor="surname" className="labelName">
                    <span className="contentName">
                        Introduce Yourself
             </span>
                </label>
            </div>
        </div>
    )
}

export default TextArea
