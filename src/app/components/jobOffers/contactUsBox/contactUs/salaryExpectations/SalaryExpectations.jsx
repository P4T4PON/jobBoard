import React, { Fragment } from 'react'
import RangeSlider from '../../../../additions/RangeSlider'
import SalaryBox from '../../../../additions/SalaryBox'

const SalaryExpectations = ({ changeValue, toggleValue, value }) => {
    return (
        <Fragment>
            <div className='salaryExpectations'>
                <h3>Salary expectations ?</h3>
                <RangeSlider changeValue={changeValue} toggleValue={toggleValue} startingValue={value} />
            </div>

            <div className='salaryRange'>
                <SalaryBox value={value[0]} type={'Min'} /> <div className='salarySpacer'>-</div> <SalaryBox value={value[1]} type={'Max'} />
            </div>
        </Fragment>
    )
}

export default SalaryExpectations
