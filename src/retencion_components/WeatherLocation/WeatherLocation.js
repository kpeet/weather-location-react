import React, {Component } from 'react';
import Location from './Location'
import WeatherData from './WeatherData/index'
import  './styles.css';
import {  SUN,WINDY } from "../../constants/weather";

const location = "Buenos Aires, ar"
const api_key = "f445f01ba4a7ed0327e5e7afd457b76d"
const url_base_weather = "https://samples.openweathermap.org/data/2.5/weather"

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
const account_engine_url ="http://localhost:8007/accounts/"
const data={
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10m/s'
}

// const data2={
//     temperature: 15,
//     weatherState: WINDY,
//     humidity: 20,
//     wind: '30m/s'
// }

class WeatherLocation extends Component{

    constructor(){
        super();
        this.state = {
          city: "Buenos Aires",
          data: data,
        };
    }

    getData = weather_data => {
        const humidity = weather_data.count;

       // const { speed } = weather_data.wind;
       // const weatherState = SUN;

        // const data = {
        //     humidity,
        //
        //     weatherState,
        //     //wind: `${speed} m/s`,
        // }

        return humidity
    }

    handleUpdateClick = () =>{
        fetch(account_engine_url).then(resolve =>{

            return resolve.json();
        }).then(data =>{
            const newWeather = this.getData(data);
             this.setState ( {
                 city: newWeather,
                 data: newWeather,
             });

            console.log(newWeather);
            debugger;
        });

        // console.log("Actualizado");
        // this.setState ( {
        //     city: "Buenos WENA",
        //     data: data2,
        // });

    }
    render(){
        const { city, data} = this.state
        return ( <div className="locationCont">
                    <Location city={city}>
                    </Location>
                    <WeatherData data={data} />
                <button onClick={this.handleUpdateClick}>Actualizar</button>
                </div>
        );
    }
}

//
// const WeatherLocation = () => (
//                                 <div className="locationCont">
//                                     <Location city={"Barcelona"}>
//                                     </Location>
//                                     <WeatherData  data={data} />
//                                 </div>
//                                 );
export default WeatherLocation;





