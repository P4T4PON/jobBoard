import React from 'react'

const NavLinkItem = ({ active, linkId, iconClass, text }) => {
    return (
        <h2 className={active === linkId ? 'hov txt active' : 'hov txt'}>
            <i className={iconClass} />
            {text}
        </h2>
    )
}

export default NavLinkItem
