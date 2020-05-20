import React, { Fragment, useState } from 'react'
import UserChoices from './userChoices/UserChoices';
import ShowButton from './showButton/ShowButton';

const UserPreferencesBox = ({ contactsData, preferences, togglePreferences }) => {

    const { userCities, remote, companyStage, companyKind, industry, seniority, employment, salary, userTechnologies, userSkills } = contactsData

    return (
        <Fragment>
            <div className="userMachmakingPreferences">
                <UserChoices
                    iconClass={'fas fa-map-marker-alt blueBox'}
                    b={userCities[0]}
                    span={'CITY'}
                />
                <UserChoices
                    iconClass={'fas fa-dollar-sign lightBlueBox'}
                    b={`${salary[0]}k - ${salary[1]}k`}
                    span={'SALARY'}
                />
                <UserChoices
                    iconClass={'fas fa-microchip pinkBox'}
                    b={userTechnologies.length > 0 && userTechnologies[0].name}
                    span={'MAIN TECH'}
                />
                <UserChoices
                    iconClass={'fab fa-react orangeBox'}
                    b={userSkills[0]}
                    span={'SKILLS'}
                />
                <UserChoices
                    iconClass={'fas fa-umbrella-beach lightBlueBlueBox'}
                    b={remote}
                    span={'REMOTE'}
                />
                <UserChoices
                    iconClass={'fas fa-user-friends yellowBox'}
                    obj={companyStage}
                    span={'STAGE'}
                    preferences={preferences}
                />
                <UserChoices
                    iconClass={'fas fa-city redBox'}
                    obj={companyKind}
                    span={'TYPE'}
                    preferences={preferences}
                />
                <UserChoices
                    iconClass={'fas fa-chart-line greenBox'}
                    obj={seniority}
                    span={'SENIORITY'}
                    preferences={preferences}
                />
                <UserChoices
                    iconClass={'far fa-building greyBox'}
                    obj={industry}
                    span={'INDUSTRY'}
                    preferences={preferences}
                />
                <UserChoices
                    iconClass={'far fa-file purpleBox'}
                    obj={employment}
                    span={'EMP.TYPE'}
                    preferences={preferences}
                />
            </div>
            <ShowButton
                preferences={preferences}
                showPreferences={togglePreferences}
            />
        </Fragment>
    )
}

export default UserPreferencesBox
