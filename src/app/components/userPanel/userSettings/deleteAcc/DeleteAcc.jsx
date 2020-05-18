import React from 'react'

const DeleteAcc = ({ isDay }) => {
    return (
        <div
            className={
                isDay ? 'deleteAcc-box' : 'deleteAcc-box deleteAcc-boxNightMode'
            }
        >
            <h2>Delete Account</h2>
            <div className="deleteAcc">
                <p>Delete your account and account data</p>
                <div className="deleteBtn">Delete my account</div>
            </div>
        </div>
    )
}

export default DeleteAcc
