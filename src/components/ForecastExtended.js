import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';


const days =[
    'Lunes',
    'Martes',
    'Miercoles',
]

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal',
}

export const api_key = "f445f01ba4a7ed0327e5e7afd457b76d"
export const url_base_weather = "https://api.openweathermap.org/data/2.5/forecast"

class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = { forecatsData: null }
    }

    componentDidMount(){
        //fetch or axios
        const url_forecast = `${url_base_weather}?q=${this.props.city}&appid=${api_key}`;

        fetch(url_forecast).then(
            data=>(data.json())
        ).then(
            weather_data => {
                console.log(weather_data)
            }
        )


    }

    renderForecatItemDay(){
        return days.map( day =>  ( <ForecastItem weekDay = {day} hour={10} data={data} ></ForecastItem>));

    }
    renderProgress = () => {
        return "<h3>Cargando pronóstico extendido ...</h3>"
    }


    render(){
        // es casi lo mismo a const { city } = this.props; aqui estoy haciendo Destructuring
        const city = this.props.city;
        const forecatsData = this.props.forecatsData;

        return (<div className={'forecastTitle'}>
            <h2  >Pronóstico Extendido para { city } </h2>
            { forecatsData ?

                this.renderForecatItemDay():
                this.renderProgress()
            }


            </div>);
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;