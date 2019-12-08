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

const location = "Buenos Aires, ar"
const api_key = "f445f01ba4a7ed0327e5e7afd457b76d"
const url_base_weather = "https://api.openweathermap.org/data/2.5/weather"

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;


class WeatherLocation extends Component{

    constructor(){
        super()
        //Esta invocacion solo puede ser usada en el constructor
        this.state={
            city: 'Santiago',
            data: data,
        }
    }

    getWeatherState = weather_data => {
        return SUN;
    }

    getData = weather_data => {
        const {humidity, temp} = weather_data.main;
        const {speed } = weather_data.wind;
        const weatherState = this.getWeatherState(weather_data);

        const data = {
            temperature: temp,
            weatherState,
            humidity,
            wind: `${ speed} m/s`
        }
        return data
    }

    handleUpdateClick = () =>{
        fetch(api_weather).then(resolve =>{
            console.log(resolve)
            return resolve.json();
        }).then(data => {
            const newWeather = this.getData(data);

            console.log(newWeather)
            this.setState({
                data: newWeather
            })



        })
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