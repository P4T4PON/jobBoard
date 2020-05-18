import React from 'react'

const MatchBox = ({ isDay }) => {
    return (
        <div className="maches-box">
            <div
                className={
                    isDay
                        ? 'maches-content'
                        : 'maches-content maches-contentNightMode'
                }
            >
                <i className="far fa-folder-open" />
              No matches found
            </div>
        </div>
    )
}

export default MatchBox
