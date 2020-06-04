import React from 'react'
import { useSelector } from 'react-redux';

const ContactUsBox = ({ children }) => {
    const isDay = useSelector(state => state.isDay);
    return (
        <div className='contactUs' style={{ height: '400px' }}>
            <div className='contactUsBox'>
                <div className={isDay ? 'salaryBox' : 'salaryBox salaryBoxNightMode'} style={{ padding: '20px' }}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ContactUsBox
