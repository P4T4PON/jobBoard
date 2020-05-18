import React from 'react'

const PriceCardHeader = ({ type, price }) => {
    return (
        <div className="cardHeader">
            <div className="header">{type}</div>
            <div className="price">
                <div className="value">{price}</div>
                <div className="currency">PLN</div>
            </div>
            <span className="after" />
        </div>
    )
}

export default PriceCardHeader
