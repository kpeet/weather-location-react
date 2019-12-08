import React from 'react';
import WeatherExtraInfo from '../WeatherExtraInfo';
import WeatherTemprature from '../WeatherTemperature';
import {  SUN,WINDY, CLOUD } from "../../../constants/weather";
import './styles.css'


const WeatherData = () => (

    <div className="weatherDataCont">
        <WeatherTemprature temperature ={20} weatherState={CLOUD}/>
        <WeatherExtraInfo  humidity = {80} wind={"10 m/s"}/>

        Weather Data
    </div>

)

export default WeatherData;