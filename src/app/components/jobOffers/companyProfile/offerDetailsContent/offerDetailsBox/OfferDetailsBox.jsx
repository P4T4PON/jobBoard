import React from 'react'
import OfferDetails from './offerDetails/OfferDetails'

const OfferDetailsBox = ({ testObj }) => {

    const renderDetails = () => {
        return testObj && testObj[0].companyOfferDetails.map((detail, index) => (
            <OfferDetails key={index} level={detail[0]} description={detail[1]} />
        ));
    };

    return (
        <div className="offerDetailsBox">
            <div className="offerDetailsBoxContent">{renderDetails()}</div>
        </div>
    )
}

export default OfferDetailsBox
