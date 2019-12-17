import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './OperationDetail';
import transforForecast from './../services/transformForecast';
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
        this.state = { forecastData: null }
    }

    componentDidMount(){
        this.updateCity(this.props.city)


    }

    //Se ejecuta siempre que se modifica el componente excepto la primera vez, por esto es necesario utilizar el componentDidMount
    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city){
            this.setState( {forecastData: null});
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city => {
        //fetch or axios
        const url_forecast = `${url_base_weather}?q=${city}&appid=${api_key}`;

        fetch(url_forecast).then(
            data=>(data.json())
        ).then(
            weather_data => {
                console.log(weather_data)
                const forecast_data = transforForecast(weather_data);
                console.log("forecastData");
                console.log(forecast_data);
                this.setState( {forecastData: forecast_data} )
                console.log("forecastData");
                console.log(this.state.forecastData);
            }
        )
    }

    renderForecatItemDay(forecastData){

        return forecastData.map( forecast =>  (
            <ForecastItem
                weekDay = {forecast.weekDay}
                hour={forecast.hour}
                data={forecast.data} >

            </ForecastItem>));

    }
    renderProgress = () => {
        return "<h3>Cargando pronóstico extendido ...</h3>"
    }


    render(){
        // es casi lo mismo a const { city } = this.props; aqui estoy haciendo Destructuring
        const {city} = this.props;
        const {forecastData} = this.state;
        console.log("RENDER!!!");
        console.log(this.props);

        return (<div className='forecastTitle'>
                    <h2  >Pronóstico Extendido para { city } </h2>

                        { forecastData ?

                            this.renderForecatItemDay(forecastData):
                            this.renderProgress()
                        }
                </div>);
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;