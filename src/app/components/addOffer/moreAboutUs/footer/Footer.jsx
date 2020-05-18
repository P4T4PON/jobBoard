import React from 'react'
import AddOfferHref from './addOfferHref/AddOfferHref';
import MadeBy from './madeBy/MadeBy'

const Footer = () => {
    return (
        <div className="moreFooter">
            <MadeBy />
            <div className="moreLinks">
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
                />

                <AddOfferHref
                    link={'/terms-and-privacy-policies'}
                    text={'Policy'}
                />
            </div>
        </div>
    )
}

export default Footer
