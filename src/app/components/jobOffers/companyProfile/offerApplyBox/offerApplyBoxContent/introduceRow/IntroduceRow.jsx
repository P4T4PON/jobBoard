import React from 'react'
import TextArea from './textArea/TextArea'
import UploadCv from './uploadCv/UploadCv'

const IntroduceRow = ({ isDay, userStory, toggleUserStory }) => {
    return (
        <div className="introduceRow">
            <TextArea userStory={userStory} toggleUserStory={toggleUserStory} isDay={isDay} />
            <UploadCv />
        </div>
    )
}

export default IntroduceRow
