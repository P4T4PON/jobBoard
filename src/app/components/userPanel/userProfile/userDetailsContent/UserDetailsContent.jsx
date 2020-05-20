import React, { Fragment } from 'react'
import AnimatedInput from '../../../additions/AnimatedInput';
import UserDetailImg from './userDetailImg/UserDetailImg'
import TextArea from './textArea/TextArea'
import { userDetails } from '../../../../../constans'

const UserDetailsContent = ({ isDay, inputData, handleChange }) => {
    const renderUserDetails = () => {
        return (userDetails.map((detail, index) =>
            <AnimatedInput
                key={index}
                divClass={'display-none'}
                className={isDay ? 'cont upi'
                    : 'cont contNightMode upi upiNightMode'
                }
                type={'text'}
                name={detail.toLowerCase()}
                value={inputData[detail.toLowerCase()]}
                checkInputLength={handleChange}
                span={detail}
            />
        ))
    }

    return (
        <Fragment>
            <UserDetailImg />
            <div className="myProfileInput">
                {renderUserDetails()}
                <TextArea isDay={isDay} story={inputData.story} handleChange={handleChange} />
            </div>
        </Fragment>
    )
}

export default UserDetailsContent
