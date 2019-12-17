import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../../components/WeatherLocation2/WeatherData';



const DisplayRepactacion = ({ weekDay, hour, data }) => (
    <div>
     <div> DisplayRepactacion { weekDay } hora : { hour } hs </div>

    </div>

);

DisplayRepactacion.prototype = {
    weekday: PropTypes.string.isRequired,
    hour: PropTypes.string.isRequired,

}


export default DisplayRepactacion;