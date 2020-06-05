import React, { useState } from 'react'
import AnimatedInput from '../../../../additions/AnimatedInput';
import IntroduceRow from './introduceRow/IntroduceRow'
import ShowMore from './showMore/ShowMore'
import { useSelector } from 'react-redux';

const OfferApplyBoxContent = ({ userStory, toggleUserStory }) => {
    const isDay = useSelector(state => state.isDay);
    const [inputData, setInputData] = useState({ firstName: "", email: "" })

    function handleChange(event) {
        const { name, value } = event.target
        setInputData(prevInputData => ({ ...prevInputData, [name]: value }))
    }

    return (
        <div className="offerApplyBoxContent">
            <div className='offerApplyBoxInputs'>
                <div style={{ marginRight: '18px' }}>
                    <AnimatedInput
                        name={'firstName'}
                        value={inputData.firstName}
                        checkInputLength={handleChange}
                        span={'first & last name'}
                        insideIcon={'far fa-user'}
                        isDay={isDay}
                        spanClass={'companyInput'}
                    />
                </div>

                <AnimatedInput
                    name={'email'}
                    value={inputData.email}
                    checkInputLength={handleChange}
                    span={'email'}
                    insideIcon={'fas fa-envelope'}
                    isDay={isDay}
                    spanClass={'companyInput'}
                />
            </div>
            <IntroduceRow isDay={isDay} userStory={userStory} toggleUserStory={toggleUserStory} />
            <ShowMore />
        </div>
    )
}

export default OfferApplyBoxContent
