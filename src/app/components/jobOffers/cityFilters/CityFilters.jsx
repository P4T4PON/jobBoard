import React from 'react'
import { otherFilters, topCities, otherCities } from '../../../../constans'
import OtherFilters from './otherFilters/OtherFilters'
import Locations from './locations/Locations'
import ClearFilters from './clearFilters/ClearFilters'
import { useSelector } from 'react-redux';

const CityFilters = ({ renderFilters, choseCity, hideCityFilters }) => {
    const isDay = useSelector(state => state.isDay);
    return (
        <div className={isDay ? 'fitersOfCities' : 'fitersOfCities fitersOfCitiesNightMode'}>
            <OtherFilters renderFilters={renderFilters} cities={otherFilters} hideCityFilters={hideCityFilters} />
            <Locations renderFilters={renderFilters} cities={topCities} />
            <Locations renderFilters={renderFilters} cities={otherCities} />
            <ClearFilters choseCity={choseCity} />
        </div>
    )
}

export default CityFilters
