import React, { Fragment } from 'react'
import OtherFilters from './otherFilters/OtherFilters'
import SalaryExpectations from './salaryExpectations/SalaryExpectations'
import SeniorityButtons from './seniorityButtons/SeniorityButtons'
import SeniorityFooter from './seniorityFooter/SeniorityFooter'
import Backdrop from './backdrop/Backdrop'
import ContactUsBox from '../ContactUsBox'

const ContactUs = ({ hideSalaryFilters, changeValue, toggleValue, value, active, changeActive, clearOtherFilters }) => {
    return (
        <Fragment>
            <ContactUsBox>
                <OtherFilters hideSalaryFilters={hideSalaryFilters} />
                <SalaryExpectations changeValue={changeValue} toggleValue={toggleValue} value={value} />
                <SeniorityButtons active={active} changeActive={changeActive} />
                <SeniorityFooter clearOtherFilters={clearOtherFilters} />
            </ContactUsBox>
            <Backdrop hideSalaryFilters={hideSalaryFilters} />
        </Fragment>
    )
}

export default ContactUs

