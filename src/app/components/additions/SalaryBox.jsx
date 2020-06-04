import React from 'react'
import { useSelector } from 'react-redux';

const SalaryBox = ({ type, value }) => {
    const isDay = useSelector(state => state.isDay);
    return (
        <div className={isDay ? 'salaryButton' : 'salaryButton salaryButtonNightMode'}>
            <div>{`${type}.amount`}</div>
            <div>{`${value * 1000} PLN`}</div>
        </div>
    )
}

export default SalaryBox



