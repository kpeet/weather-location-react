import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemprature from './WeatherTemperature';

const WeatherData = () => (

    <div>
        <WeatherExtraInfo  humidity = {80} wind={"10 m/s"}/>
        <WeatherTemprature/>
        Weather Data
    </div>

)

export default WeatherData;