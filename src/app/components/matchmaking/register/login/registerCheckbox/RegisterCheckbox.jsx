import React from 'react'
import { Link } from 'react-router-dom'

const RegisterCheckbox = () => {
    return (
        <div className="registerCheckbox">
            <input type="checkbox" />
            <h2 className="checkbox-txt">
                I accept <Link to="/terms-and-privacy-policies" className='checkboxText'>Terms</Link> of service *
          </h2>
        </div>
    )
}

export default RegisterCheckbox
