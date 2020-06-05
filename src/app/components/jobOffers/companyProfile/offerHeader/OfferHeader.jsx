import React from 'react'
import CompanySpec from './companySpec/CompanySpec';
import OfferContent from './offerContent/OfferContent'

const OfferHeader = ({ testObj, isDay, toggleLocation, location }) => {

    return (
        <div className="offerHeader">
            <div className={`offerBackgorund ${testObj && testObj[0].bgColor}`}>
                <OfferContent testObj={testObj} isDay={isDay} toggleLocation={toggleLocation} location={location} />
                <CompanySpec testObj={testObj} />
            </div>
        </div>
    )
}

export default OfferHeader
