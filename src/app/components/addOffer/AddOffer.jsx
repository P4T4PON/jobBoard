import React, { useState } from 'react';
import './AddOffer.css';
import tech from './technology_header.svg';
import plFlag from './pl.png';
import ukFlag from './uk.png';
import Doc from './znanylekarz.png';
import Owl from './owls.png';
import Vdlogo from './vdlogo.png';
import Dev from './devsdata.png';
import Schib from './schibsted.png';
import Partners from './partners.svg';
import Rocket from './rocket.svg';
import Bar from './bar.svg';
import Brain from './brain.svg';
import Medal from './medal.svg';
import Macbook from './macbook.png';
import Slider from 'infinite-react-carousel';
import PriceCard from './PriceCard';
import AddOfferSlide from './AddOfferSlide';
import CardSection from './CardSection';
import AddOfferItem from './AddOfferItem';
import Submit from '../additions/SubmitButton';
import AddOfferHref from './AddOfferHref';
import { slideContent, AddOfferItems } from '../../../constans';

const AddOffer = () => {
  const [pl, SetPl] = useState(true);
  const [myRef] = useState(React.createRef());

  return (
    <div className="add-offer">
      <div className="intro-header">
        <div className="intro-inner">
          <div className="text">
            <p>
              {pl
                ? 'Dzięki nam dotrzesz skutecznie do społeczności ponad 200 tysięcy polskich programistów'
                : 'Thanks to us you will effectively reach the community of over 200,000 Polish developers '}
            </p>
            <img src={tech} alt="" />
          </div>
        </div>
      </div>

      <div className="pricing-table">
        <div className="language-switch">
          <div className={pl ? 'flag opacity' : 'flag '}>
            <img src={ukFlag} onClick={() => SetPl(false)} alt="" />
          </div>
          <div className={pl ? 'flag' : 'flag opacity'}>
            <img src={plFlag} onClick={() => SetPl(true)} alt="" />
          </div>
        </div>
        <h1>
          {pl
            ? 'Poznaj ogłoszenia na Just Join IT'
            : 'Get to know job ads on Just Join IT'}
        </h1>

        <div className="price-offers">
          <PriceCard pl={pl} type={'Basic'} price={'390'} />
          <PriceCard pl={pl} type={'Premium'} price={'490'} />
          <PriceCard pl={pl} type={'Business'} price={'790'} />
        </div>
      </div>
      <div className="recomendation-card">
        <div className="main-grid">
          <div className="row">
            <h1>Rekomendacje</h1>
            <div className="carousel-box">
              <div className="side-nav">
                <div className="prev" onClick={myRef.slickPrev}>
                  {' '}
                  <i className="fas fa-arrow-left"></i>{' '}
                </div>
                <div className="next" onClick={myRef.slickNext}>
                  {' '}
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>

              <Slider dots ref={myRef} dotsClass="carousel-dots">
                <AddOfferSlide
                  title={slideContent[0][0]}
                  subTitle={slideContent[0][1]}
                  text={slideContent[0][2]}
                  img={Doc}
                />

                <AddOfferSlide
                  className={'correct'}
                  title={slideContent[1][0]}
                  subTitle={slideContent[1][1]}
                  text={slideContent[1][2]}
                  img={Schib}
                />

                <AddOfferSlide
                  title={slideContent[2][0]}
                  subTitle={slideContent[2][1]}
                  text={slideContent[2][2]}
                  img={Dev}
                />

                <AddOfferSlide
                  className={'owl correct'}
                  title={slideContent[3][0]}
                  subTitle={slideContent[3][1]}
                  text={slideContent[3][2]}
                  img={Owl}
                />

                <AddOfferSlide
                  className={'correct'}
                  title={slideContent[4][0]}
                  subTitle={slideContent[4][1]}
                  text={slideContent[4][2]}
                  img={Vdlogo}
                />
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className="partners">
        <div className="main-grid">
          <div className="partners-header">
            <div className="partners-text">
              <h1>
                {pl
                  ? 'Stali Partnerzy mają \n jeszcze lepiej!'
                  : 'Regular Partners have even more benefits!'}
              </h1>
              {pl
                ? 'Proponujemy atrakcyjne warunki za pakiety ogłoszeń'
                : ' We offer attractive conditions for job ad packages'}
              <p>{pl ? 'masz pytania?' : 'Do you have any questions?'}</p>
            </div>
            <div className="partners-img">
              <img src={Partners} alt=""></img>
            </div>
          </div>
        </div>
        <div className="partners-row">
          <CardSection pl={pl} type={'c1'} text={'+48 737 175 805'} />
          <CardSection pl={pl} type={'c2'} text={'sales@justjoin.it'} />
        </div>
      </div>
      <div className="moreaboutus">
        <div className="more-main">
          <div className="text-col">
            <h1>
              {pl ? 'Nieco więcej o:' : 'A bit more about:'}
              <div className="card-number bigger">Justjoin.it</div>
            </h1>

            <div className="items">
              <AddOfferItem
                pl={pl}
                img={Rocket}
                textPl={AddOfferItems[0][0]}
                textEng={AddOfferItems[0][1]}
              />
              <AddOfferItem
                pl={pl}
                img={Bar}
                textPl={AddOfferItems[1][0]}
                textEng={AddOfferItems[1][1]}
              />
              <AddOfferItem
                pl={pl}
                img={Brain}
                textPl={AddOfferItems[2][0]}
                textEng={AddOfferItems[2][1]}
              />
              <AddOfferItem
                pl={pl}
                img={Medal}
                textPl={AddOfferItems[3][0]}
                textEng={AddOfferItems[3][1]}
              />
            </div>
          </div>
          <div className="img-col">
            <img src={Macbook} alt="" />
          </div>
        </div>

        <Submit
          divClass={'button-center'}
          className={'price-button foot'}
          value={pl ? 'Kup ogłoszenie' : 'Post a job'}
        />

        <div className="more-footer">
          <div className="made-by">
            <p>made by:</p> justjoin.it{' '}
          </div>
          <div className="more-links">
            <AddOfferHref link={'/'} text={'Just Join IT'} />

            <AddOfferHref
              link={'/brands/story/just-join-it'}
              text={'About us'}
            />
            <AddOfferHref link={'/brands'} text={'Brand Stories'} />

            <AddOfferHref
              link={'https://rocketjobs.pl/'}
              text={'Rocket Jobs'}
            />

            <AddOfferHref
              link={'/terms-and-privacy-policies'}
              text={'Terms'}
              iconClass={'far fa-file-pdf'}
            />

            <AddOfferHref
              link={'/terms-and-privacy-policies'}
              text={'Policy'}
              iconClass={'far fa-file-pdf'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOffer;
