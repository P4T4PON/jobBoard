import React from 'react'

const ChosenInput = ({ city, removeCity }) => {
    return (
        <div className='input-chosen'>{city}<i className="fas fa-times-circle" onClick={() => removeCity(city)} /></div>
    )
}

export default ChosenInput
