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

    renderForecatItemDay(){
        return days.map( day =>  ( <ForecastItem weekDay = {day} hour={10} data={data} ></ForecastItem>));

    }


    render(){
        // es casi lo mismo a const { city } = this.props; aqui estoy haciendo Destructuring
        const city = this.props.city;

        return (<div className={'forecastTitle'}>
            <h2  >Pronóstico Extendido para { city } </h2>
            { this.renderForecatItemDay()}

            </div>);
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;