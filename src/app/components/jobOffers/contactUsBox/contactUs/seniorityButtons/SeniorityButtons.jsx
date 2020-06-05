import React from 'react'
import SeniorityButton from '../../../../additions/SeniorityButton'
import { seniorityButtons } from '../../../../../../constans'

const SeniorityButtons = ({ active, changeActive }) => {
    const renderButtons = () => {
        return seniorityButtons.map((text, index) => (
            <SeniorityButton key={index} text={text} active={active} changeActive={changeActive} />
        ));
    };

    return (
        <div className='salaryExpectations'>
            <h3>Seniority</h3>
            <div className='seniorityButtons'>
                {renderButtons()}
            </div>
        </div>
    )
}

export default SeniorityButtons
