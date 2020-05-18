import React from 'react'

const CompanyName = ({ companyName }) => {
    return (
        <span className="companyName">
            <i className="fas fa-city" /> {companyName}
        </span>
    )
}

export default CompanyName
