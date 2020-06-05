import React, { useState } from 'react'
import UserDetails from '../userDetails/UserDetails'
import UploadCvBox from '../uploadCvBox/UploadCvBox'
import YearsBoxesBox from '../yearsBoxesBox/YearsBoxesBox'
import AnimatedInput from '../../../additions/AnimatedInput'

const AdditionalInfoBox = ({ isDay, inputData, handleChange, linkedinError, githubError, toggleExperiance }) => {

    return (
        <div className="uploadCV">
            <UserDetails
                className={'uploadCV'}
                title={'UPLOAD CV'}>
                <UploadCvBox
                    isDay={isDay}
                    inputData={inputData}
                    handleChange={handleChange}
                    linkedinError={linkedinError}
                />
            </UserDetails>

            <UserDetails
                className={'yearsOfExperiance'}
                title={'YEARS OF EXPERIANCE'}
                paragraph={'How many years of experience do you have?'}>
                <YearsBoxesBox isDay={isDay} inputData={inputData} toggleExperiance={toggleExperiance} />
            </UserDetails>

            <UserDetails
                className={'socialLinks'}
                title={'SOCIAL LINKS'}
            >
                <AnimatedInput
                    iconClass={'fab fa-github mediaIcon colorBlack fs40'}
                    className={
                        isDay ? 'cont' : 'cont upiNightMode contNightMode'
                    }
                    type={'text'}
                    name={'github'}
                    value={inputData.github}
                    checkInputLength={handleChange}
                    span={'Github'}
                    error={githubError}
                />
            </UserDetails>
        </div>
    )
}

export default AdditionalInfoBox
