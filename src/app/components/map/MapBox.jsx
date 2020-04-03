import React, { useState, useEffect } from 'react'
import './MapBox.css'
import L from 'leaflet'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { icons, companyOffers, testCities } from '../../../constans'


const MapBox = ({ profile, city, technology, expLevel }) => {
    const [zoom, setZoom] = useState(6);
    const closeZoom = 13;
    const [centerPosition, setCenterPosition] = useState([51.944636, 19.567038])

    const centerIcon = (item) => {
        setZoom(13)
        setCenterPosition([item.companyLat, item.companyLng])
    }

    useEffect(() => {
        { city === 'Remote' || city === 'World' || city !== '' ? setCenterPosition(testCities[city]) : setCenterPosition([51.944636, 19.567038]) }
        { city === 'Remote' ? setZoom(6) : city === 'World' ? setZoom(5) : city !== '' ? setZoom(11) : setZoom(6) }
    }, [city])

    const renderChosenIcon = () => {
        return companyOffers.map((item, index) => {
            if (technology === item.technology) {
                return <Marker onClick={() => centerIcon(item)} key={index} position={[item.companyLat, item.companyLng]}
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
                    <Popup className='popup'>
                        {<img src={item.img} alt='' />}{item.companyName} <br /> {item.min} - {item.max} <br /> {item.name}
                    </Popup>

                </Marker >

            }
        });
    }

    const renderIcons = () => {
        return companyOffers.map((item, index) => (
            <Marker onClick={() => centerIcon(item)} key={index} position={[item.companyLat, item.companyLng]} icon={
                L.icon(
                    {
                        iconUrl: icons[item.technology],
                        iconSize: [40, 40],
                        iconAnchor: [0, 0],
                        popupAnchor: [20, 0]
                    }
                )
            } >
                <Popup className='popup'>
                    {<img src={item.img} alt='' />}{item.companyName} <br /> {item.min} - {item.max} <br /> {item.name}
                </Popup>

            </Marker >
        ));
    };

    const test = () => {
        console.log(city)
    }

    return (

        < Map className='map' center={profile ? [profile.companyLat, profile.companyLng] : centerPosition} zoom={profile ? closeZoom : zoom} >
            {test()}
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {technology !== '' ? renderChosenIcon() : renderIcons()}

        </Map >
    )
}

export default MapBox;

