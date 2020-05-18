import React, { Fragment, useState } from 'react'
import UserChoices from './userChices/UserChoices';
import ShowButton from './showButton/ShowButton';

const UserPreferencesBox = ({ contactsData }) => {
    const [preferences, setPreferences] = useState(true);

    const { userCities, remote, companyStage, companyKind, industry, seniority, employment, salary, userTechnologies, userSkills } = contactsData

    return (
        <Fragment>
            <div className="userMachmaking-preferences">
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
                />
                <UserChoices
                    iconClass={'fas fa-city redBox'}
                    obj={companyKind}
                    span={'TYPE'}
                />
                <UserChoices
                    iconClass={'fas fa-chart-line greenBox'}
                    obj={seniority}
                    span={'SENIORITY'}

                />
                <UserChoices
                    iconClass={'far fa-building greyBox'}
                    obj={industry}
                    span={'INDUSTRY'}

                />
                <UserChoices
                    iconClass={'far fa-file purpleBox'}
                    obj={employment}
                    span={'EMP.TYPE'}
                />
            </div>
            <ShowButton
                preferences={preferences}
                showPreferences={() => setPreferences(!preferences)}
            />
        </Fragment>
    )
}

export default UserPreferencesBox
