import React from 'react';
import WeatherExtraInfo from '../WeatherExtraInfo';
import WeatherTemprature from '../WeatherTemperature';
import {  SUN,WINDY, CLOUD } from "../../../constants/weather";
import './styles.css'


const WeatherData = ({data: {temperature, weatherState, humidity, wind}}) => {
    return (<div className="weatherDataCont">
        <WeatherTemprature temperature ={temperature} weatherState={weatherState}/>
        <WeatherExtraInfo  humidity = {humidity} wind={wind}/>

        Weather Data
    </div>);

};

export default WeatherData;