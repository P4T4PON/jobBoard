import React from 'react'

const PopupLink = ({ item }) => {
    const { img, companyName, min, max, name } = item

    return (
        <div className='popupLink' >
            <div className='popupImg'>
                <img src={img} alt='' />
            </div>
            <div className='popupText'>
                {companyName}<br />
                {min} - {max}<br />
                {name}
            </div>
        </div>
    )
}

export default PopupLink
