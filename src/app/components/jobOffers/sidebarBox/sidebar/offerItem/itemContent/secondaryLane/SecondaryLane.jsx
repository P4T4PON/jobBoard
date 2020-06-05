import React from 'react'
import CompanyName from './companyName/CompanyName'
import CompanyAddress from './companyAddress/CompanyAddress'

const SecondaryLane = ({ offer, isDay }) => {
    const { companyCity, companyAddress, companyName } = offer

    const renderTags = () => {
        return offer.companyTags.map((tag, index) => (
            <span className={isDay ? 'tag' : 'tagNightMode'} key={index}>
                {tag}
            </span>
        ));
    };

    return (
        <div className="secondaryLine">
            <span className="companyInfo">
                <CompanyName companyName={companyName} />
                <CompanyAddress companyCity={companyCity} companyAddress={companyAddress} />
            </span>
            <div className="tags">{renderTags()}</div>
        </div>
    )
}

export default SecondaryLane
