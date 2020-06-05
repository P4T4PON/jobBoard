import React from 'react'
import AddOfferItem from './addOfferItem/AddOfferItem'
import Macbook from '../../../additions/img/macbook.png';
import { AddOfferItems, addOfferItems } from '../../../../../constans';

const Main = ({ pl }) => {
    return (
        <div className="moreMain">
            <div className="textCol">
                <h1>
                    {pl ? 'Nieco więcej o:' : 'A bit more about:'}
                    <div className="card-number bigger">Justjoin.it</div>
                </h1>
                <div className="items">
                    <AddOfferItem
                        img={addOfferItems.development.img}
                        text={pl ? addOfferItems.development.pl : addOfferItems.development.eng}
                    />
                    <AddOfferItem
                        img={addOfferItems.views.img}
                        text={pl ? addOfferItems.views.pl : addOfferItems.views.eng}
                    />
                    <AddOfferItem
                        img={addOfferItems.cummunity.img}
                        text={pl ? addOfferItems.cummunity.pl : addOfferItems.cummunity.eng}
                    />
                    <AddOfferItem
                        img={addOfferItems.trust.img}
                        text={pl ? addOfferItems.trust.pl : addOfferItems.trust.eng}
                    />
                </div>
            </div>
            <div className="imgCol">
                <img src={Macbook} alt="" />
            </div>
        </div>
    )
}

export default Main
