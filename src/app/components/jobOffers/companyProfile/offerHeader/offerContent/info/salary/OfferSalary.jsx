import React from 'react'

const OfferSalary = ({ testObj }) => {
    return (
        <div className="offerSalary">
            {testObj && testObj[0].min} - {testObj && testObj[0].max} net/month
        </div>
    )
}

export default OfferSalary
