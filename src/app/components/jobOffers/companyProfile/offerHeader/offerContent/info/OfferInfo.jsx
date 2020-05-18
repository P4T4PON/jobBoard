import React from 'react'
import OfferSalary from './salary/OfferSalary'
import OfferRemote from './remote/OfferRemote'

const OfferInfo = ({ testObj, isDay }) => {
    return (
        <div className="offerInfo">
            <OfferSalary testObj={testObj} />
            <OfferRemote testObj={testObj} isDay={isDay} />
        </div>
    )
}

export default OfferInfo
