import React from 'react'
import NavLinkItem from '../navLink/navLinkItem/NavLinkItem'

const JustGeekIt = ({ active }) => {
    return (
        <a
            href="https://geek.justjoin.it/"
            target="_blank"
            rel="noopener noreferrer"
            className='moveMe'
        >
            <NavLinkItem iconClass={'far fa-newspaper'} text={'Just Geek IT'} active={active} />
        </a>
    )
}

export default JustGeekIt
