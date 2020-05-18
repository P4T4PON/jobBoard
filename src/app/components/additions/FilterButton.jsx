import React from 'react'

const FilterButton = ({ text, headIcon, showFilters, filter, chosenCity }) => {

    const toggleFilters = () => {
        showFilters(!filter)
    }

    return (
        <button className={chosenCity === text ? 'filterButton chosen' : 'filterButton'} onClick={toggleFilters}>
            <span className='filterButtonContent'>
                {headIcon && <i className="fas fa-sliders-h mgr10" style={{ marginRight: "10px" }} />}
                {text}
                <i className={`mgl10 fas fa-chevron-${filter ? 'up' : 'down'}`} style={{ marginLeft: "10px" }} />
            </span>
        </button>
    )
}

export default FilterButton
