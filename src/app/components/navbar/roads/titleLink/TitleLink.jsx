import React from 'react'
import { Link } from 'react-router-dom'

const TitleLink = ({ toggleActive, isDay, changeBrands }) => {
    return (
        <Link to="/">
            <h1 className={isDay ? 'title' : 'title titleNightMode'} onClick={() => { toggleActive(0); changeBrands(false) }}>
                justjoin.it
        </h1>
        </Link>
    )
}

export default TitleLink
