import React from 'react'

const OfferImgBox = ({ testObj }) => {
    return (
        <div className="offerImgBox">
            <div className="offerImg">
                <img src={testObj && testObj[0].img} />
            </div>
        </div>
    )
}

export default OfferImgBox
