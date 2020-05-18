import React from 'react'
import tech from '../../additions/img/technology_header.svg'
import { introHeader } from '../../../../constans'

const IntroHeader = ({ pl }) => {
    return (
        <div className="introHeader">
            <div className="introInner">
                <div className="text">
                    <p>
                        {pl ? introHeader['pl'] : introHeader['eng']}
                    </p>
                    <img src={tech} alt="" />
                </div>
            </div>
        </div>
    )
}

export default IntroHeader
