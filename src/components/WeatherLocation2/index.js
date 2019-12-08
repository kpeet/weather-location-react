import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import Location from './WeatherData/Location';
import WeatherData from './WeatherData/index';
import './styles.css'


import transformWeather from '../../services/transformWeather'
import {api_weather} from '../../constants/api_url'






class WeatherLocation extends Component{

    constructor(){
        super()
        //Esta invocacion solo puede ser usada en el constructor
        this.state={
            city: 'Santiago',
            data: null,
        }
        console.log("constructor")
    }

    componentDidMount(){
        console.log("componentDidMount")
        this.handleUpdateClick()

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

                    {data ?
                        <WeatherData data={data}/> :
                        <CircularProgress/>
                    }

                 /*<button onClick={this.handleUpdateClick}>Actualizar</button> */
                </div>
            );
                };

}


export default WeatherLocation;