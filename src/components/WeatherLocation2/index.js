import React, {Component} from 'react';
import Location from './WeatherData/Location';
import WeatherData from './WeatherData/index';
import './styles.css'
import {SUN, CLOUDY} from "../../constants/weather";

import transformWeather from '../../services/transformWeather'
import {api_weather} from '../../constants/api_url'

const data = {
    temperature: 15,
    weatherState: CLOUDY,
    humidity: 10,
    wind: '10m/s'
}





class WeatherLocation extends Component{

    constructor(){
        super()
        //Esta invocacion solo puede ser usada en el constructor
        this.state={
            city: 'Santiago',
            data: data,
        }
        console.log("constructor")
    }

    componentDidMount(){
        console.log("componentDidMount")


    }
    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate")


    }



    handleUpdateClick = () =>{
        fetch(api_weather).then(resolve =>{
            console.log(resolve)
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);

            console.log(newWeather)
            this.setState({
                data: newWeather
            })



        })
        console.log("Actualizado")
       /* this.setState({
                city: "Montevideo",
                data: data2
            }
        );*/
        }


    render() {
        const {city, data}=this.state;
        console.log("render")

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