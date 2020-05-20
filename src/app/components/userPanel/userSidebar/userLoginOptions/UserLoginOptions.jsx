import React from 'react'
import LinkItem from './linkItem/LinkItem'
import { userProfileLinks } from '../../../../../constans'

const UserLoginOptions = ({ active, toggleActive }) => {

    const renderProfileLinks = () => {
        return (userProfileLinks.map((link, index) =>
            <LinkItem
                key={index}
                link={link.link}
                iconClass={link.iconClass}
                paragraph={link.paragraph}
                active={active}
                linkId={index + 1}
                toggleActive={toggleActive}
            />
        ))
    }

    return (
        <div className="userLoginOptions">
            {renderProfileLinks()}
        </div>

    )
}

export default UserLoginOptions
