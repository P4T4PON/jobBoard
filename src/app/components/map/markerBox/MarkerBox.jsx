import React from 'react'
import { Link } from 'react-router-dom'
import L from 'leaflet'
import PopupLink from '.././popupLink/PopupLink'
import { Marker, Popup } from 'react-leaflet'
import { icons } from '../../../../constans'

const MarkerBox = ({ item }) => {
    return (
        <Marker position={[item.companyLat, item.companyLng]}
            icon={
                L.icon(
                    {
                        iconUrl: icons[item.technology],
                        iconSize: [40, 40],
                        iconAnchor: [0, 0],
                        popupAnchor: [20, 0]
                    }
                )
            } >
            <Link to={item.link}>
                <Popup className='popup' >
                    <PopupLink item={item} />
                </Popup>
            </Link>
        </Marker >
    )
}

export default MarkerBox
