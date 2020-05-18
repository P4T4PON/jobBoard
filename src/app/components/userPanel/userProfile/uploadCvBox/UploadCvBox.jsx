import React, { useState, Fragment } from 'react'
import AnimatedInput from '../../../additions/AnimatedInput'
import DragAndDropBox from './dragAndDropBox/DragAndDropBox'

const UploadCvBox = ({ isDay, inputData, handleChange, linkedinError }) => {

    return (
        <Fragment>
            <b>Paste your Linkedin page as CV</b>
            <AnimatedInput
                divClass={'margTop20'}
                iconClass={'fab fa-linkedin mediaIcon colorBlue fs40'}
                className={
                    isDay
                        ? 'cont margTop20'
                        : 'cont contNightMode upiNightMode margTop20'
                }
                type={'text'}
                name={'linkedin'}
                value={inputData.linkedin}
                checkInputLength={handleChange}
                span={'Linkedin'}
                error={linkedinError}
            />
            <p>
                <b>Or add as attachment</b>(We accept: PDF)
          </p>
            <DragAndDropBox />
        </Fragment>
    )
}

export default UploadCvBox
