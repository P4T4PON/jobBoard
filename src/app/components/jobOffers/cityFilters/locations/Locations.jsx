import React from 'react'

const Locations = ({ renderFilters, cities }) => {
    return (
        <div className='locations'>
            <h3>Other Locations</h3>
            <div className='locationCities'>
                {renderFilters(cities)}
            </div>
        </div>
    )
}

export default Locations
