import React from 'react'

const SeniorityButton = ({ text, active, changeActive }) => {

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
        <div className={active[text] ? 'seniorityButton chosen' : 'seniorityButton'} onClick={() => changeActive(superSecret)}>
            {text}
        </div >
    )
}

export default SeniorityButton
