import React from 'react';
import WeatherIcons from 'react-weathericons';
import {CLOUD,CLOUDY, SUN, SNOW, RAIN, WINDY} from "../../../constants/weather";
import PropTypes from 'prop-types'

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
    console.log(icon)
    if (icon)

        return <WeatherIcons name={icon} size="2x" />;
    else
        return <WeatherIcons name={"rain"} size="2x" />;
}
const WeatherTemperature = ({temperature, weatherState }) => (

    <div>
        {
            getWeatherIcon(weatherState)

        }

        <span>{ `${ weatherState } Cº` }</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,

};

export default WeatherTemperature;