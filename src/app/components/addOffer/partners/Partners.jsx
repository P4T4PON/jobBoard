import React from 'react'
import CardSection from './cardSection/CardSection';
import MainGrid from './mainGrid/MainGrid'
import { contactUs } from '../../../../constans'


const Partners = ({ pl }) => {
    return (
        <div className="partners">
            <MainGrid pl={pl} />
            <div className="partnersRow">
                <CardSection pl={pl} type={pl ? contactUs.phone.pl : contactUs.phone.eng} text={'+48 737 175 805'} />
                <CardSection pl={pl} type={pl ? contactUs.text.pl : contactUs.text.eng} text={'sales@justjoin.it'} />
            </div>
        </div>
    )
}

export default Partners
