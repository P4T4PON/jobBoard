import React from 'react'

const OtherFilters = ({ hideSalaryFilters }) => {
    return (
        <div className='otherFilters'>
            <h3>More Filters</h3>
            <div className='exitBox'>
                <i className="far fa-times-circle" onClick={hideSalaryFilters} />
            </div>
        </div>
    )
}

export default OtherFilters
