import React, { useState } from 'react';
import Slider from 'infinite-react-carousel';
import { slideContent } from '../../../../../constans';
import AddOfferSlide from '../../AddOfferSlide';

const renderSlideContent = () => {
  return slideContent.map((slide, index) => (
    <AddOfferSlide
      className={
        index === 3 ? 'owl correct' : index === 1 || 4 ? 'correct' : null
      }
      key={index}
      title={slide[0]}
      subTitle={slide[1]}
      text={slide[2]}
      img={slide[3]}
    />
  ));
};
const SliderBox = () => {
  const [myRef] = useState(React.createRef());

  return (
    <div className="recomendation-card">
      <div className="main-grid">
        <div className="row">
          <h1>Rekomendacje</h1>
          <div className="carousel-box">
            <div className="side-nav">
              <div className="prev" onClick={myRef.slickPrev}>
                <i className="fas fa-arrow-left" />
              </div>
              <div className="next" onClick={myRef.slickNext}>
                <i className="fas fa-arrow-right" />
              </div>
            </div>

            <Slider dots ref={myRef} dotsClass="carousel-dots">
              {renderSlideContent()}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderBox;
