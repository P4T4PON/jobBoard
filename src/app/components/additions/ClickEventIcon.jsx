import React from 'react'

const ClickEventIcon = ({ toggleActive, divClass, iconClass }) => {
    return (
        <div className={divClass} onClick={toggleActive}>
            <i className={iconClass} />
        </div>
    )
}

export default ClickEventIcon
