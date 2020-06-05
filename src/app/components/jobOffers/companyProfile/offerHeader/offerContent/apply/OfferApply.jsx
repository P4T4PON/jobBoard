import React from 'react'

const OfferApply = ({ isDay }) => {
    return (
        <a href='#ua' className='displayContents'>
            <div className={isDay ? "offerApply" : 'offerApply offerApplyNightMode'}>
                <i className="fas fa-envelope" />
                <h2>Apply</h2>
            </div>
        </a>
    )
}

export default OfferApply
