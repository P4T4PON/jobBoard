import React from 'react'
import SliderCarousel from 'infinite-react-carousel';
import AddOfferSlide from '../addOfferSlide/AddOfferSlide';
import { slideContentt } from '../../../../../../constans';

const Slider = ({ myRef }) => {
    return (
        <SliderCarousel dots ref={myRef} dotsClass="carousel-dots">

            <AddOfferSlide
                title={slideContentt.znanyLekarz.name}
                subTitle={slideContentt.znanyLekarz.profesion}
                text={slideContentt.znanyLekarz.description}
                img={slideContentt.znanyLekarz.img}
            />

            <AddOfferSlide
                title={slideContentt.schibsted.name}
                subTitle={slideContentt.schibsted.profesion}
                text={slideContentt.schibsted.description}
                img={slideContentt.schibsted.img}
            />

            <AddOfferSlide
                title={slideContentt.devsData.name}
                subTitle={slideContentt.devsData.profesion}
                text={slideContentt.devsData.description}
                img={slideContentt.devsData.img}
            />

            <AddOfferSlide
                title={slideContentt.owls.name}
                subTitle={slideContentt.owls.profesion}
                text={slideContentt.owls.description}
                img={slideContentt.owls.img}
            />

            <AddOfferSlide
                title={slideContentt.ventureDevs.name}
                subTitle={slideContentt.ventureDevs.profesion}
                text={slideContentt.ventureDevs.description}
                img={slideContentt.ventureDevs.img}
            />

        </SliderCarousel>
    )
}

export default Slider
