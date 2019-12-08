import React, {Component} from 'react';
import Location from './WeatherData/Location';
import WeatherData from './WeatherData/index';
import './styles.css'
import {SUN, CLOUDY} from "../../constants/weather";

const data = {
    temperature: 15,
    weatherState: CLOUDY,
    humidity: 10,
    wind: '10m/s'
}


class WeatherLocation extends Component{
    render() {
        return(
                <div className="weatherLocationCont">
                <Location city={"Buenos Aires"}/>
                <WeatherData data={data}/>
                </div>);
                }

}


export default WeatherLocation;