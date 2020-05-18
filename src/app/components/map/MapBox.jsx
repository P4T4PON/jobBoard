import React, { useState, useEffect } from 'react'
import './MapBox.css'
import { Map, TileLayer } from 'react-leaflet'
import { companyOffers, testCities } from '../../../constans'
import MarkerBox from './markerBox/MarkerBox'

const MapBox = ({ city, technology, expLevel, coords, value, location }) => {
    const [zoom, setZoom] = useState(6);
    const closeZoom = 13;
    const [centerPosition, setCenterPosition] = useState([51.944636, 19.567038])

    useEffect(() => {
        { technology !== '' && setCenterPosition([51.944636, 19.567038]) && setZoom(6) }
        { city !== '' ? setCenterPosition(testCities[city]) : setCenterPosition([51.944636, 19.567038]) }
        { city === 'Remote' ? setZoom(6) : city === 'World' ? setZoom(5) : city !== '' ? setZoom(11) : setZoom(6) }
    }, [city, technology, location])

    const renderChosenIcon = () => {
        return companyOffers.map((item, index) => {
            if ((technology === item.technology || technology === '')
                &&
                (city === item.companyCity || city === '' || city === 'World' || (item.remote && city === 'Remote') || (city === 'Trójmiasto' &&
                    (item.companyCity === 'Gdańsk' ||
                        item.companyCity === 'Gdynia' ||
                        item.companyCity === 'Sopot'))) &&
                (expLevel['all'] === true || expLevel[item.exp] === true) &&
                ((value[0] * 1000) <= item.min && (value[1] * 1000) >= item.max)

            ) {
                return <MarkerBox item={item} key={index} />
            }
        });
    }

    return (
        < Map className='map' center={coords && window.location.pathname !== '/' ? [coords.companyLat, coords.companyLng]
            : centerPosition} zoom={coords && window.location.pathname !== '/' ? closeZoom : zoom} >
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {renderChosenIcon()}
        </Map >
    )

}

export default MapBox;