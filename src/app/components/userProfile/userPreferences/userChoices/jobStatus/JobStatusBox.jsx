import React, { useState } from 'react';
import { JobStatus } from './JobStatus';
import UserPreferencesHeader from '../../UserPreferencesHeader';
const JobStatusBox = () => {
  const [jobStatusActive, setJobStatusActive] = useState(1);
  return (
    <div className="preferences-box">
      <UserPreferencesHeader
        heading={'preferences-heading'}
        className={'jobStatus-box'}
        iconClass={'far fa-eye'}
        title={"Ok, let's start! What is your status in job search?"}
        paragraph={
          'Let us know if we should look for the best job on the market for you.'
        }
      />
      <div className="preferences-jobStatus">
        <div className="jobStatus-box">
          <JobStatus
            icon={'far fa-file-alt'}
            span1={'Actively looking '}
            span2={'for a job'}
            setJobStatusActive={() => setJobStatusActive(1)}
            jobStatusActive={jobStatusActive}
            jobStatusId={1}
          />
          <JobStatus
            icon={'fas fa-envelope-open-text'}
            span1={'Open '}
            span2={'for proposals'}
            setJobStatusActive={() => setJobStatusActive(2)}
            jobStatusActive={jobStatusActive}
            jobStatusId={2}
          />
          <JobStatus
            icon={'fas fa-unlock-alt'}
            span1={'Not open '}
            span2={'for proposals'}
            setJobStatusActive={() => setJobStatusActive(3)}
            jobStatusActive={jobStatusActive}
            jobStatusId={3}
          />
        </div>
      </div>
    </div>
  );
};

export default JobStatusBox;
