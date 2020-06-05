import React from 'react'
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
import CompanyProfile from '../../jobOffers/companyProfile/CompanyProfile';
import Map from '../../map/MapBox'

const SidebarBox = ({ chosenCity, toggleAllCities, technology, active, value, toggleLocation, location, coords, toggleCoordinates }) => {
    const isDay = useSelector(state => state.isDay);

    return (
        <div className='sidebarBox'>
            <div className={isDay ? 'sidebarOffers' : 'sidebarOffers sidebarOffersNightMode'}>
                <Switch>
                    <Route exact path={'/'}>
                        <Sidebar
                            city={chosenCity}
                            toggleAllCities={toggleAllCities}
                            newTechnology={technology}
                            expLevel={active}
                            isDay={isDay}
                            value={value}
                        />
                    </Route>
                    <Route exact path='/offer/:id'><CompanyProfile toggleCoordinates={toggleCoordinates} toggleLocation={toggleLocation} location={location} /></Route>
                </Switch>
            </div>
            <Switch>
                <Route path={'/'}><div className='sidebar-map'><Map city={chosenCity} technology={technology} value={value} expLevel={active} coords={coords} location={location} toggleLocation={toggleLocation} /></div></Route>
            </Switch>
        </div>
    )
}

export default SidebarBox
