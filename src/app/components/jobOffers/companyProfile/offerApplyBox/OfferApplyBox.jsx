import React from 'react'
import OfferApplyBoxContent from './offerApplyBoxContent/OfferApplyBoxContent'
import AdditionalInfo from './additionalInfo/AdditionalInfo'

const OfferApplyBox = ({ userStory, toggleUserStory }) => {
    return (
        <div className="offerApplyBox">
            <OfferApplyBoxContent userStory={userStory} toggleUserStory={toggleUserStory} />
            <AdditionalInfo />
        </div>
    )
}

export default OfferApplyBox

