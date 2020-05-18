import React from 'react'

const OtherFilters = ({ renderFilters, cities, hideCityFilters }) => {
    return (
        <div className='otherFilters'>
            {renderFilters(cities)}
            <div className='exitBox'>
                <i className="far fa-times-circle" onClick={hideCityFilters} />
            </div>
        </div>
    )
}

export default OtherFilters
