import React from 'react';
import WeatherIcons from 'react-weathericons';
import {CLOUD,CLOUDY, SUN, SNOW, RAIN, WINDY} from "../../../constants/weather";
import PropTypes from 'prop-types'
import './styles.css'

const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy"
};


const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];

    const sizeIcon = "4x";

    console.log(icon)
    if (icon)

        return <WeatherIcons className="wicon" name={icon} size="2x" />;
    else
        return <WeatherIcons className="wicon" name={"rain"} size="2x" />;
}
const WeatherTemperature = ({temperature, weatherState }) => (

    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)

        }

        <span className="temperature">{ `${ temperature }` }</span>
        <span className="temperature_type">{ `C`  }</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,

};

export default WeatherTemperature;