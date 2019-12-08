import React from 'react';
import WeatherLocation from '../WeatherLocation2'
import PropTypes from 'prop-types'



const strToComponent = cities => (
    cities.map(city=> <WeatherLocation city={city}/>)
)

const LocationList = ( { cities }) =>{
    console.log(cities)
    return (
    <div>
        {strToComponent(cities)}
    </div>
    );
}


LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
}


export default LocationList;