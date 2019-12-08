import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemprature from './WeatherTemperature';

const WeatherData = () => (

    <div>
        <WeatherTemprature temperature ={20} weatherState={""}/>
        <WeatherExtraInfo  humidity = {80} wind={"10 m/s"}/>

        Weather Data
    </div>

)

export default WeatherData;