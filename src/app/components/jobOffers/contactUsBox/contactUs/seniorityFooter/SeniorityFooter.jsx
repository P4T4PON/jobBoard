import React from 'react'
import CityButton from '../../../../additions/CityButton';

const SeniorityFooter = ({ clearOtherFilters }) => {
    return (
        <div className='seniorityFooter'>
            <div className='seniorityFooterContent'>
                <CityButton city={''} text={'Clear Filters'} choseCity={clearOtherFilters} />
            </div>
        </div>
    )
}

export default SeniorityFooter
