import React from 'react'
import { Link } from 'react-router-dom'

const ProfileAlert = ({ paragraph, text, link }) => {
    return (
        <div className='profileAlert'>
            <i className="fas fa-exclamation-circle" />
            <p>{paragraph}</p>
            <Link to={`/panel/${link}`} className='roundedBtn bgPink'>{text}</Link>
        </div>
    )
}

export default ProfileAlert
