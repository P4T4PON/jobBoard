import React from 'react'

const CompanyAddress = ({ companyAddress, companyCity }) => {
    return (
        <span className="companyAddress">
            <i className="fas fa-map-marker-alt" />
            {companyAddress} {companyCity}
        </span>
    )
}

export default CompanyAddress
