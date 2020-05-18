import React from 'react'

const TechnologiesList = ({ tech, showTech, technologies, userTechnologies, toggleTechnologies, toggleUserTechnologies }) => {

    const addTech = (newTech) => {
        if (userTechnologies.length !== 2) {
            toggleTechnologies(newTech, userTechnologies)
        }
    }

    function containsValue(value) {
        return (value.name.toLowerCase().includes(tech.toLowerCase()));
    }

    const filterValues = (userTechnologies) => {
        for (let i = 0; i < technologies.length; i++) {
            if (technologies[i] === userTechnologies) {
                toggleUserTechnologies(userTechnologies, technologies)
            }
        }
    }

    const filteredTechnologies = technologies.filter(containsValue);

    const renderTechnologies = () => {
        return (filteredTechnologies.map((tech, index) =>
            <li key={index} onMouseDown={() => { filterValues(tech); addTech(tech) }}> <i className={tech.icon} />{tech.name}</li>
        ))
    }

    return (
        <div className="cities-box">
            <div className={showTech ? 'cities' : 'cities display-none'}>
                <ul className="city-ul">
                    {renderTechnologies()}
                </ul>
            </div>
        </div>
    )
}

export default TechnologiesList
