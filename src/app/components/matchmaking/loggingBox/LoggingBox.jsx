import React from 'react'
import { useSelector } from 'react-redux';
import MachmakingLink from '../mathcmakingLink/MachmakingLink';
import Media from './media/Media'
import Login from './login/Login'
import { matchmakingHrefs } from '../../../../constans'

const LoggingBox = () => {
    const isDay = useSelector(state => state.isDay);

    return (
        <div className={isDay ? 'loggingBox' : 'loggingBox loggingBoxNightMode'}>
            <div className="logging">
                <Media isDay={isDay} hrefs={matchmakingHrefs} />
                <Login isDay={isDay} />
                <MachmakingLink
                    text={'New account?'}
                    link={'/devs/Register'}
                    linkText={'Register'}
                    isDay={isDay}
                />
            </div>
        </div>
    )
}

export default LoggingBox
