import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation2/index';






const LocationList = ( { cities , onSelectedLocation}) =>{
    console.log(cities)

    const handlerWeatherLocationClick = city => {
        console.log("handlerWeatherLocationClick");
        onSelectedLocation(city);
    }


    const strToComponent = cities => (
        cities.map((city )=>
            (<WeatherLocation
                key = {city}
                city={city}
                onWeatherLocationClick={ () => handlerWeatherLocationClick(city)}

            />)
        )
    )


    return (
    <div>
        {strToComponent(cities)}
    </div>
    );
}


LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}


export default LocationList;