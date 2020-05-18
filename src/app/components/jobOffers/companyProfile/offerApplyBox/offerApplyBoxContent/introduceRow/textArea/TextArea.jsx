import React from 'react'

const TextArea = ({ userStory, toggleUserStory, isDay }) => {
    return (
        <div className="cont biggInput inpont " style={{ width: '50%', marginRight: '0' }}>
            <div className="companyProfileTextArea ">
                <textarea
                    type="text"
                    name="userSurname"
                    autoComplete="off"
                    spellCheck="false"
                    required
                    value={userStory}
                    onChange={toggleUserStory}
                    className={isDay === false ? 'inputNightMode' : null}
                />
                <label htmlFor="surname" className="labelName">
                    <span className={isDay ? "contentName" : "contentName  inputNightMode"} style={{ marginLeft: '20px' }}>
                        Introduce Yourself
                </span>
                    <i className="fas fa-pen tai" />
                </label>
            </div>
        </div>
    )
}

export default TextArea
