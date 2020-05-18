import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

function valuetext(value) {
    return `${value}k`;
}

const RangeSlider = ({ changeValue, toggleValue, startingValue }) => {
    const classes = useStyles();
    const handleChange = (event, newValue) => {
        toggleValue(newValue)
        changeValue(newValue)
    };

    const commitValue = (event) => {
        toggleValue(startingValue)
        changeValue(startingValue)
    }

    return (
        <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
            </Typography>
            <Slider
                value={startingValue}
                onChange={handleChange}
                onChangeCommitted={commitValue}
                // valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                valueLabelFormat={valuetext}
                min={0}
                max={50}
            />
        </div>
    );
}

export default RangeSlider;