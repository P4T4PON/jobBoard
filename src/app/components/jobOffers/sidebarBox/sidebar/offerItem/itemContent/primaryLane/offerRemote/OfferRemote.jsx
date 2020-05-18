import React from 'react'

const OfferRemote = ({ remote }) => {
    return (
        <div className={remote ? 'remoteUp' : 'display-none'}>
            Remote
        </div>
    )
}

export default OfferRemote
