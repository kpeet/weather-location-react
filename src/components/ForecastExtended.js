import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';


const renderForecatItemDay = (forecastData) => {

    return forecastData.map(forecast => (
        <ForecastItem
            weekDay={forecast.weekDay}
            hour={forecast.hour}
            data={forecast.data}>

        </ForecastItem>));
};

const renderProgress = () => {
        return "<h3>Cargando pronóstico extendido ...</h3>"
    };

const  ForecastExtended = ({city, forecastData}) => (
       <div className='forecastTitle'> <h2  >Pronóstico Extendido para { city } </h2>
        { forecastData ?

            renderForecatItemDay(forecastData):
            renderProgress()
        }
                </div>
);


ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,

}

export default ForecastExtended;