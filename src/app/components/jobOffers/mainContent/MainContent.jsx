import React from 'react'
import FilterButton from '../../additions/FilterButton'
import Technologies from '.././filters/technologies/Technologies';
import { useSelector } from 'react-redux';

const MainContent = ({ chosenCity, showCities, showCityFilters, toggleAllTechnologies, showSalary, linkTo, showSalaryFilters }) => {
    const isDay = useSelector(state => state.isDay);
    return (
        <div className="mainContent">
            <div className={isDay ? 'subHeader' : 'subHeaderNightMode'}>
                <div className="filters">
                    <div className="filtersTechnologies">
                        <FilterButton text={chosenCity === ''
                            || chosenCity === 'Clear Filters' ? 'Location' : chosenCity}
                            showFilters={showCities} filter={showCityFilters} chosenCity={chosenCity} />
                        <Technologies
                            toggleAllTechnologies={toggleAllTechnologies}
                            linkTo={linkTo}
                        />
                        <div className="otherFiltersBox">
                            <FilterButton text={'More Filters'} headIcon={true} showFilters={showSalary} filter={showSalaryFilters} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent
