import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

function valuetext(value) {
    return `${value}k`;
}

const RangeSlider = ({ changeValue, toggleValue, description }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState([0, 50]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        changeValue(value)
    };

    const commitValue = () => {
        toggleValue(value)
        console.log(value)
    }

    return (
        <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
                {description ? <div className='range-sliderDescript'>Choose salary range</div> : null}
            </Typography>
            <Slider
                value={value}
                onChange={handleChange}
                onChangeCommitted={commitValue}
                valueLabelDisplay="auto"
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