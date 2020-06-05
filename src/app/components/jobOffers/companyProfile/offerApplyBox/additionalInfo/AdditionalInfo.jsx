import React from 'react'

const AdditionalInfo = () => {
    return (
        <div className="additionalInfo">
            <h3>
                {`This site is protected by reCAPTCHA and the Google `}
                <a href="https://policies.google.com/privacy" target="blanc">
                    Privacy Policy
                </a>
                {` and `}
                <a href="https://policies.google.com/terms" target="blanc">
                    Terms of Service
                </a>
                {` apply.`}
            </h3>

            <div className="applyToState" id='ua'>
                <div className="applyBtn">
                    apply
                    <div className="applyDart">
                        <i className="fas fa-chevron-right" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdditionalInfo
