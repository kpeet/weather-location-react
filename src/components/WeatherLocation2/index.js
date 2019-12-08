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

    constructor(){
        super()
        this.state={
            city: 'Santiago',
            data: data,
        }
    }

    handleUpdateClick = () =>{
       console.log("Actualizado")
        };


    render() {
        return(
                <div className="weatherLocationCont">
                    <Location city={this.state.city}/>
                    <WeatherData data={this.state.data}/>

                    <button onClick={this.handleUpdateClick}>Actualizar</button>
                </div>
            );
                };

}


export default WeatherLocation;