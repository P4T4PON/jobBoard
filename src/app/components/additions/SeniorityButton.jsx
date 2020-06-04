import React from 'react'
import { useSelector } from 'react-redux';

const SeniorityButton = ({ text, active, changeActive }) => {
    const isDay = useSelector(state => state.isDay);

    const superSecret = function (active) {
        Object.keys(active).forEach((key) => {
            if (key === text) {
                active[key] = !active[key]
            } else if (key !== text) {
                active[key] = false
            }
        });
        if (active['junior'] === false && active['mid'] === false && active['senior'] === false) {
            active['all'] = true
        }
        return active;
    }

    return (
        <div className={active[text] ? 'seniorityButton chosen' : isDay ? 'seniorityButton' : 'seniorityButton seniorityButtonNightMode'} onClick={() => changeActive(superSecret)}>
            {text}
        </div >
    )
}

export default SeniorityButton
