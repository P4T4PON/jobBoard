import React from 'react'
import UserPanelLink from '../../../UserPanelLink';

const AnonUserPanel = ({ active, isDay, toggleActive }) => {

    return (
        <div
            className={
                active && isDay ? 'anonUserPanel'
                    : active && isDay === false
                        ? 'anonUserPanel anonUserPanelNightMode'
                        : 'anonUserPanel display-none'
            }
        >
            <UserPanelLink
                link={'/devs/'}
                toggleActive={toggleActive}
                iconClass={'far fa-grin pinkIcon'}
                paragraph={'Sign in as a Developer'}
            />
            <UserPanelLink
                customStyle={0}
                link={'/users/sign_in'}
                toggleActive={toggleActive}
                iconClass={'fas fa-suitcase purpleIcon'}
                paragraph={'Sign in to Emlployer Panel'}
            />

        </div>
    )
}

export default AnonUserPanel
