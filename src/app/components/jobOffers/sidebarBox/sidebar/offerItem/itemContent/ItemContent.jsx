import React from 'react'
import { Link } from 'react-router-dom'
import PrimaryLane from './primaryLane/PrimaryLane'
import SecondaryLine from './secondaryLane/SecondaryLane'
import CompanyLogo from './companyLogo/CompanyLogo'

const ItemContent = ({ offer, isDay, toggleAllCities, city }) => {
    const { link, img } = offer

    return (
        <Link to={link} onClick={() => toggleAllCities(city, '/')}>
            <div className="itemContent">
                <CompanyLogo img={img} />
                <div className="itemRow">
                    <PrimaryLane offer={offer} isDay={isDay} />
                    <SecondaryLine offer={offer} isDay={isDay} />
                </div>
            </div>
        </Link>
    )
}

export default ItemContent
