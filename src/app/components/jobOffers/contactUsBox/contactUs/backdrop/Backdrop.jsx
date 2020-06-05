import React from 'react'

const Backdrop = ({ hideSalaryFilters }) => {
    return (
        <div
            className="backdrop"
            onClick={hideSalaryFilters}
        />
    )
}

export default Backdrop
