import React from 'react'

const MatchBox = ({ isDay }) => {
    return (
        <div className="machesBox">
            <div
                className={
                    isDay
                        ? 'machesContent'
                        : 'machesContent machesContentNightMode'
                }
            >
                <i className="far fa-folder-open" />
              No matches found
            </div>
        </div>
    )
}

export default MatchBox
