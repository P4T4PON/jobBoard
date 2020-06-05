import React from 'react'

const ProfileCompleted = ({ text }) => {
    return (
        <div className='profileCompleted'>
            <i className="far fa-check-circle" />
            {text}
        </div>
    )
}

export default ProfileCompleted
