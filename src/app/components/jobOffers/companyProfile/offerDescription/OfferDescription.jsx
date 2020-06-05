import React from 'react'
import { useSelector } from 'react-redux';
import AdditionalInfo from './additionalInfo/AdditionalInfo';

const OfferDescription = ({ testObj }) => {
    const isDay = useSelector(state => state.isDay);
    return (
        <div className="offerDescriptionBox">
            <div className={isDay ? "offerDescriptionContent" : 'offerDescriptionContent offerDescriptionContentNightMode'}>
                <div>{testObj && testObj[0].companyDescription}</div>
                <AdditionalInfo companyAddress={testObj && testObj[0].companyAddress} companyCity={testObj && testObj[0].companyCity} name={testObj && testObj[0].name} />
            </div>
        </div>
    )
}

export default OfferDescription
