import React from 'react';
import PropTypes from "prop-types";
import './styles.css'


const WeatherExtraInfo = ({humidity, wind}) => (

    <div>
        <h1>Extra Info</h1>
        <span>{`${humidity} % - `}</span>
        <span>{`${wind} wind`}</span>
    </div>
);
WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}



export default WeatherExtraInfo;