import React from 'react'

const ContactUsBox = ({ children }) => {
    return (
        <div className='contactUs' style={{ height: '400px' }}>
            <div className='contactUsBox'>
                <div className='salaryBox' style={{ padding: '20px' }}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ContactUsBox
