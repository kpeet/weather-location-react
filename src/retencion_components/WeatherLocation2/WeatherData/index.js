import React from 'react';
import WeatherExtraInfo from '../WeatherExtraInfo';
import WeatherTemprature from '../WeatherTemperature';

import './styles.css'
import PropTypes from 'prop-types'

const WeatherData = ({data: {temperature, weatherState, humidity, wind}}) => {
    return (<div className="weatherDataCont">
        <WeatherTemprature temperature ={temperature} weatherState={weatherState}/>
        <WeatherExtraInfo  humidity = {humidity} wind={wind}/>

        Weather Data
    </div>);

};
WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
}
export default WeatherData;

