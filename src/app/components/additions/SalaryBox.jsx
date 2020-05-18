import React from 'react'

const SalaryBox = ({ type, value }) => {
    return (
        <div className='salaryButton'>
            <div>{`${type}.amount`}</div>
            <div>{`${value * 1000} PLN`}</div>
        </div>
    )
}

export default SalaryBox



