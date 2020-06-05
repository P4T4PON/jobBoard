import React from 'react'
import LinkButton from '../../../additions/LinkButton'

const UserMatchmakingHeader = ({ isDay }) => {
    return (
        <div
            className={isDay
                ? 'userMachmakingHeader'
                : 'userMachmakingHeader userMachmakingHeaderNightMode'
            }
        >
            <h2>Your preferences</h2>
            <LinkButton
                link={'/panel/preferences'}
                className={'editPreferencesBtn'}
                text={'Edit'}
            />
        </div>
    )
}

export default UserMatchmakingHeader
