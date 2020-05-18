import React from 'react'

const OfferAge = ({ offer, isDay }) => {
    const { min, max, age } = offer
    return (
        <div className="offerAge">
            <span className="salaryRow">
                {min} - {max} PLN
            </span>
            <span
                className={
                    isDay === false && age === 'New'
                        ? 'ageNightMode newNightMode'
                        : isDay === false
                            ? 'ageNightMode'
                            : isDay && age === 'New'
                                ? 'age new'
                                : 'age'
                }
            >
                {age}
            </span>
        </div>
    )
}

export default OfferAge
