import React, { Fragment, useState } from 'react'
import YearsBox from './yearsBox/YearsBox';
import { yearsBox } from '../../../../../constans';

const YearsBoxesBox = ({ isDay, toggleExperiance, inputData }) => {

    const renderYearsBoxes = () => {
        return yearsBox.map((box, index) => (
            <YearsBox
                key={index}
                boxId={index + 1}
                toggleActive={() => toggleExperiance(index + 1)}
                active={inputData.experiance}
                paragraph={box}
                isDay={isDay}
            />
        ));
    };

    return (
        <Fragment>
            <div className="yearsBoxes-content">
                {renderYearsBoxes()}
            </div>
        </Fragment>
    )
}

export default YearsBoxesBox
