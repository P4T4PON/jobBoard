import React from 'react'
import JobStatus from './jobStatus/JobStatus'
import { jobStatusOptions } from '../../../../../../../constans'

const JobStatusContent = ({ isDay, userStatus, toggleStatus }) => {

    const renderJobStatus = () => {
        return (jobStatusOptions.map((option, index) =>
            <JobStatus
                key={index}
                icon={option.icon}
                upperText={option.upperText}
                downText={option.downText}
                toggleStatus={() => toggleStatus(option.color)}
                userStatus={userStatus}
                color={option.color}
                jobStatusId={index}
                isDay={isDay}
            />
        ))
    }

    return (
        <div className="preferencesJobStatus">
            <div className="jobStatusBox">
                {renderJobStatus()}
            </div>
        </div>
    )
}

export default JobStatusContent
