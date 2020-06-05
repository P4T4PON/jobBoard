import React from 'react'
import InputTile from './inputTile/InputTile'

const CitiesList = ({ city, chosenCities, showCities, cities, searchCities, toggleCities }) => {

    function containsValue(value) {
        return (value.toLowerCase().includes(city.toLowerCase()));
    }

    const pushCity = (city) => {
        searchCities(city, chosenCities)
    }

    const filterValues = (chosenCity) => {
        for (let i = 0; i < cities.length; i++) {
            if (cities[i] === chosenCity) {
                toggleCities(chosenCity, cities)
            }
        }
    }

    const filteredCities = cities.filter(containsValue);

    const renderCities = () => {
        return filteredCities.map((city, index) => <InputTile key={index} city={city} filterValues={filterValues} pushCity={pushCity} />);
    };

    return (
        <div className="cities-box">
            <div className={showCities ? 'cities' : 'cities display-none'}>
                <ul className="city-ul">{renderCities()}</ul>
            </div>
        </div>
    )
}

export default CitiesList
