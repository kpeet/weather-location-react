import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../../components/WeatherLocation2/WeatherData';



const ForecastItem = ({ weekDay, hour, data }) => (
    <div>
     <div>{ weekDay } hora : { hour } hs </div>
        <WeatherData data = {data} />
    </div>

);

ForecastItem.prototype = {
    weekday: PropTypes.string.isRequired,
    hour: PropTypes.string.isRequired,

}


export default ForecastItem;