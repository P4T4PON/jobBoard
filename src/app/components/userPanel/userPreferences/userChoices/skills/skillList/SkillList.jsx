import React from 'react'
import InputTile from '../../workPlace/citiesList/inputTile/InputTile'


const SkillList = ({ showSkill, skill, skills, userSkills, toggleSkills, toggleUserSkills }) => {

    const pushCity = (skill) => {
        if (userSkills.length !== 5) {
            toggleSkills(skill, userSkills)
        }
    }

    const filterValues = (chosenSkill) => {
        if (userSkills.length !== 5) {
            for (let i = 0; i < skills.length; i++) {
                if (skills[i] === chosenSkill) {
                    toggleUserSkills(chosenSkill, skills)
                }
            }
        }
    }

    const renderSkills = () => {
        return filteredSkills.map((skill, index) => <InputTile key={index} city={skill} filterValues={filterValues} pushCity={pushCity} />);
    };

    function containsValue(value) {
        return (value.toLowerCase().includes(skill.toLowerCase()));
    }

    const filteredSkills = skills.filter(containsValue);

    return (
        <div className="cities-box">
            <div className={showSkill ? 'skills cities' : 'cities display-none'}>
                <ul className="city-ul">{renderSkills()}</ul>
            </div>
        </div>
    )
}

export default SkillList
