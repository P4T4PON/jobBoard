import React, { useState } from 'react'
import SideNav from './sideNav/SideNav'
import Slider from './slider/Slider'

const CarouselBox = () => {
    const [myRef] = useState(React.createRef());
    return (
        <div className="carouselBox">
            <Slider myRef={myRef} />
        </div>
    )
}

export default CarouselBox
