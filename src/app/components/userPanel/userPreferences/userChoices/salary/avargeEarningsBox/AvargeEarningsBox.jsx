import React from 'react'

const AvargeEarningsBox = ({ userSalary }) => {
    return (
        <div className="inputValues">
            <span className="inputSpan">
                {userSalary[0] * 1000} - {userSalary[1] * 1000} (PLN)
        </span>
            <div className="inputValue">
                Average earnings: {((userSalary[1] + userSalary[0]) / 2) * 1000} PLN
        </div>
        </div>
    )
}

export default AvargeEarningsBox
