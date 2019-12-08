import React from 'react';
import Location from './WeatherData/Location';
import WeatherData from './WeatherData/index';


const WeatherLocation = () =>  (
    <div className="weatherLocationCont">
        Weather Location
        <Location city={"Buenos Aires"}/>
        <WeatherData/>
    </div>
)


export default WeatherLocation;