import React from 'react'
import { Link } from 'react-router-dom'
import OfferImgBox from './imgBox/OfferImgBox'
import OfferInfo from './info/OfferInfo'
import OfferApply from './apply/OfferApply'

const OfferContent = ({ testObj, isDay, toggleLocation, location }) => {

    const toggleNewLocation = () => {
        toggleLocation(!location)
    }

    return (
        <div className="offerContent">
            <Link to='/' className='offerGoBack' onClick={toggleNewLocation}>
                <i className="fas fa-arrow-left" />
            </Link>
            <OfferImgBox testObj={testObj} />
            <OfferInfo testObj={testObj} isDay={isDay} />
            <OfferApply isDay={isDay} />
        </div>
    )
}

export default OfferContent
