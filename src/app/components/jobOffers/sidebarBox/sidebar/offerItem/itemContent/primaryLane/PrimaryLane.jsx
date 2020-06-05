import React from 'react'
import OfferAge from './offerAge/OfferAge'
import OfferTitle from './offerTitle/OfferTitle'
import OfferRemote from './offerRemote/OfferRemote'

const PrimaryLane = ({ offer, isDay }) => {
    const { remote, title } = offer
    return (
        <div className="primaryLine">
            <OfferTitle title={title} isDay={isDay} />
            <OfferRemote remote={remote} />
            <OfferAge offer={offer} isDay={isDay} />
        </div>
    )
}

export default PrimaryLane
