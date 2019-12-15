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

class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = { forecatsData: null }
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