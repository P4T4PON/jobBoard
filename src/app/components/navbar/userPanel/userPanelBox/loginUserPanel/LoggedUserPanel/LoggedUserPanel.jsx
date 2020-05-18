import React from 'react'
import UserPanelLink from '../../../UserPanelLink';
import { loggedUserLinks } from '../../../../../../../constans'

const LoggedUserPanel = ({ active, isDay, toggleActive }) => {

    const RenderLoggedUserLinks = () => {
        return (loggedUserLinks.map((link, index) =>
            <UserPanelLink
                key={index}
                link={link.link}
                toggleActive={toggleActive}
                iconClass={link.iconClass}
                paragraph={link.paragraph}
            />
        ))
    }

    return (
        <div
            className={
                active && isDay
                    ? 'loggedUserPanel'
                    : active && isDay === false
                        ? 'loggedUserPanel loggedUserPanelNightMode'
                        : 'loggedUserPanel display-none'
            }
        >
            {RenderLoggedUserLinks()}
        </div>
    )
}

export default LoggedUserPanel
