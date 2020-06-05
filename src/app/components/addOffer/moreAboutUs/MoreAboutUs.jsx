import React from 'react'
import Submit from '../../additions/SubmitButton';
import Main from './main/Main'
import Footer from './footer/Footer'

const MoreAboutUs = ({ pl }) => {
    return (
        <div className="moreAboutUs">
            <Main pl={pl} />
            <Submit
                divClass={'buttonCenter'}
                className={'priceButton foot'}
                value={pl ? 'Kup ogłoszenie' : 'Post a job'}
            />
            <Footer />
        </div>
    )
}

export default MoreAboutUs
