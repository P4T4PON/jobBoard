import React from 'react'

const CountryFlag = ({ pl, flag, togglePl, value }) => {
    return (
        <div className={pl && value ? 'flag' : pl === false && value === false ? 'flag' : 'flag opacity'}>
            <img src={flag} onClick={() => togglePl(value)} alt="" />
        </div>
    )
}

export default CountryFlag
