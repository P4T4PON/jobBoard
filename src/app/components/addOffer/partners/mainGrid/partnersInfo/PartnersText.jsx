import React from 'react'

const PartnersText = ({ pl }) => {
    return (
        <div className="partnersText">
            <h1>{pl ? 'Stali Partnerzy mają \n jeszcze lepiej!' : 'Regular Partners have even more benefits!'}</h1>
            {pl ? 'Proponujemy atrakcyjne warunki za pakiety ogłoszeń' : ' We offer attractive conditions for job ad packages'}
            <p>{pl ? 'masz pytania?' : 'Do you have any questions?'}</p>
        </div>
    )
}

export default PartnersText
