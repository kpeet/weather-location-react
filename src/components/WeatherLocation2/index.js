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
const data2 = {
    temperature: 1000,
    weatherState: SUN,
    humidity: 1000,
    wind: '500m/s'
}


class WeatherLocation extends Component{

    constructor(){
        super()
        //Esta invocacion solo puede ser usada en el constructor
        this.state={
            city: 'Santiago',
            data: data,
        }
    }

    handleUpdateClick = () =>{
       console.log("Actualizado")
        this.setState({
                city: "Montevideo",
                data: data2
            }
        );
        }


    render() {
        const {city, data}=this.state;
        return(
                <div className="weatherLocationCont">
                    <Location city={city}/>
                    <WeatherData data={data}/>

                    <button onClick={this.handleUpdateClick}>Actualizar</button>
                </div>
            );
                };

}


export default WeatherLocation;