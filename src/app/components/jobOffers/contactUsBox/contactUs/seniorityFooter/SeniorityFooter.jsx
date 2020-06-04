import React from 'react'
import CityButton from '../../../../additions/CityButton';
import { useSelector } from 'react-redux';

const SeniorityFooter = ({ clearOtherFilters }) => {
    const isDay = useSelector(state => state.isDay);
    return (
        <div className='seniorityFooter'>
            <div className='seniorityFooterContent'>
                <CityButton city={''} text={'Clear Filters'} choseCity={clearOtherFilters} isDay={isDay} />
            </div>
        </div>
    )
}

export default SeniorityFooter
