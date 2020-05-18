import React from 'react'
import MachmakingHref from '../../matchmakingHref/MachmakingHref';

const Media = ({ isDay, hrefs }) => {

    const renderHrefs = () => {
        return hrefs.map((href, index) =>
            <MachmakingHref
                key={index}
                color={href.color}
                className={href.className}
                paragraph={href.paragraph}
            />
        )
    }

    return (
        <div className={isDay ? 'media' : 'media mediaNightMode'}>
            <h1>Get started for free</h1>
            {renderHrefs()}
            <div className="span">
                <span className="spanItem">Or</span>
            </div>
        </div>
    )
}

export default Media
