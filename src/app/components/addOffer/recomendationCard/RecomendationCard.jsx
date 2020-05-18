import React from 'react'
import CarouselBox from './carouselBox/CarouselBox'

const RecomendationCard = () => {
    return (
        <div className="recomendationCard">
            <div className="mainGrid">
                <div className="row">
                    <h1>Rekomendacje</h1>
                    <CarouselBox />
                </div>
            </div>
        </div>
    )
}

export default RecomendationCard
