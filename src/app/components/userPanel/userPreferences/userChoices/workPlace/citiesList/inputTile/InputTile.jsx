import React from 'react'

const InputTile = ({ city, filterValues, iconClass, pushCity }) => {
    return (
        <li onMouseDown={() => { filterValues(city); pushCity(city) }}> {iconClass && <i className={iconClass} />}{city}</li>
    )
}

export default InputTile
