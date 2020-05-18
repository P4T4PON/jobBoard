import React from 'react'
import CityButton from '../../../additions/CityButton';

const ClearFilters = ({ choseCity }) => {
    return (
        <div className='filterClear'>
            <CityButton city={''} text={'Clear Filters'} choseCity={choseCity} />
        </div>
    )
}

export default ClearFilters
