import React from 'react'
import Submit from '../../../../additions/SubmitButton';

const PriceCardDescription = ({ pl, renderPriceCard }) => {
    return (
        <div className="description">
            <ul className="benefits">
                {renderPriceCard()}
            </ul>
            <Submit
                divClass={'widdth'}
                value={pl ? 'Kup ogłoszenie' : 'Post a job'}
                className={'priceButton'}
            />
        </div>
    )
}

export default PriceCardDescription
