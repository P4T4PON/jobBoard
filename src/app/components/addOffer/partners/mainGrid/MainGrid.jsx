import React from 'react'
import PartnersText from './partnersInfo/PartnersText'
import PartnersImg from './partnersInfo/PartnersImg'


const MainGrid = ({ pl }) => {
    return (
        <div className="mainGrid">
            <div className="partnersHeader">
                <PartnersText pl={pl} />
                <PartnersImg />
            </div>
        </div>
    )
}

export default MainGrid
