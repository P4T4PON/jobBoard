import React from 'react'
import CityButton from '../../../additions/CityButton';
import { useSelector } from 'react-redux';

const ClearFilters = ({ choseCity }) => {
    const isDay = useSelector(state => state.isDay);
    return (
        <div className='filterClear'>
            <CityButton city={''} text={'Clear Filters'} choseCity={choseCity} isDay={isDay} />
        </div>
    )
}

export default ClearFilters
