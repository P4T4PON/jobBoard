import React from 'react'
import ProfileAlert from './profileAlert/ProfileAlert'
import MatchmakingHeader from './matchmakingHeader/MatchmakingHeader'
import ProfileCompleted from './profileCompleted/ProfileCompleted'

const MatchmakingBackdrop = ({ contactsData }) => {
    const { name, surname, linkedin, userCities, remote, salary, userTechnologies, userSkills } = contactsData

    return (
        <div className='matchmakingBackdrop'>
            <div className='matchmakingAlert'>
                <MatchmakingHeader />
                {name === '' || surname === '' || linkedin === '' ?
                    <ProfileAlert paragraph={'Complete your profile to apply through matchmaking'} text={'Complete Profile'} link={'profile'} />
                    : <ProfileCompleted text={'Your profile is complete!'} />}
                <div className='separationLine' />
                {userCities.length === 0 || remote === '' || salary[1] < 1 || userTechnologies.length < 1 || userSkills.length < 1 ?
                    <ProfileAlert paragraph={'Fill preferences to see your job matches'} text={'Fill preferences'} link={'preferences'} />
                    : <ProfileCompleted text={'Your matchmaking preferences are complete!'} />
                }
            </div>
        </div>
    )
}

export default MatchmakingBackdrop


