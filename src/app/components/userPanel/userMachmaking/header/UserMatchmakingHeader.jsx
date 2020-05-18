import React from 'react'
import LinkButton from '../../../additions/LinkButton'

const UserMatchmakingHeader = ({ isDay }) => {
    return (
        <div
            className={isDay
                ? 'userMachmaking-header'
                : 'userMachmaking-header userMachmaking-headerNightMode'
            }
        >
            <h2>Your preferences</h2>
            <LinkButton
                link={'/panel/preferences'}
                className={'editPreferences-btn'}
                text={'Edit'}
            />
        </div>
    )
}

export default UserMatchmakingHeader
