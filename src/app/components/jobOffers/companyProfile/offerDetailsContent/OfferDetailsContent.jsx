import React from 'react'
import { useSelector } from 'react-redux';

const OfferDetailsContent = ({ text, children }) => {
    const isDay = useSelector(state => state.isDay)

    return (
        <div className={isDay ? "offerDetailsContent" : "offerDetailsContent offerDetailsContentNightMode"}>
            <div className={isDay ? "offerDetailsHeader" : "offerDetailsHeader offerDetailsHeaderNightMode"}>{text}</div>
            {children}
        </div>
    )
}

export default OfferDetailsContent
