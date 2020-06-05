import React, { Fragment } from 'react'

const OfferRemote = ({ testObj, isDay }) => {
    return (
        <Fragment>
            <div className="offerRemoteUp">
                <h1>{testObj && testObj[0].companyName}</h1>
                <div className={testObj && testObj[0].remote && isDay ? 'offerRemote' : testObj && testObj[0].remote ? 'offerRemote  offerRemoteNigtMode' : 'display-none'}>
                    Remote
                </div>
            </div>

            <h2>{testObj && testObj[0].companyAddress}</h2>
        </Fragment>
    )
}

export default OfferRemote
