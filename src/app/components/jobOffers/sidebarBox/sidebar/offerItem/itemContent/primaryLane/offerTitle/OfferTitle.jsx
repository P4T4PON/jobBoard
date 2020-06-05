import React from 'react'

const OfferTitle = ({ title, isDay }) => {
    return (
        <span className={isDay ? 'offerTitle' : 'offerTitle offerTitleNightMode'}>
            {title}
        </span>
    )
}

export default OfferTitle
