import React from 'react'
import Click from '../../../../additions/ClickEventIcon'

const SideNav = ({ myRef }) => {
    return (
        <div className="sideNav">
            <Click toggleActive={myRef.slickPrev} divClass={'prev'} iconClass={'fas fa-arrow-left'} />
            <Click toggleActive={myRef.slickNext} divClass={'next'} iconClass={'fas fa-arrow-right'} />
        </div>
    )
}

export default SideNav
