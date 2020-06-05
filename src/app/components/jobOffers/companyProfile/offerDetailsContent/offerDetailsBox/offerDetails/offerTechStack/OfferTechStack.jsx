import React, { Fragment } from 'react';

const OfferTechStack = ({ level }) => {
    return (
        <Fragment>
            <div className='offerDot pinkDot' />
            <div className={`offerDot ${level !== 'nice to have' ? 'pinkDot' : 'greyDot'}`} />
            <div className={`offerDot ${level !== 'nice to have' && level !== 'junior' ? 'pinkDot' : 'greyDot'}`} />
            <div className={`offerDot ${level === 'advanced' || level === 'senior' ? 'pinkDot' : 'greyDot'}`} />
            <div className={`offerDot ${level === 'senior' ? 'pinkDot' : 'greyDot'}`} />
        </Fragment>
    )
}

export default OfferTechStack
