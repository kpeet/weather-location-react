import React from 'react';
import WeatherIcons from 'react-weathericons';
import {CLOUD, CLOUDY, RAIN, SNOW, SUN, WINDY, DRIZZLE,THUNDER} from "../../constants/weather";
import PropTypes from 'prop-types'
import './styles.css'


const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy",
    [THUNDER]: "day-drizzle",
    [DRIZZLE]: "drizzle",
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if(icon)

        return <WeatherIcons name={icon} size="2x"/>;
    else
        return <WeatherIcons name={"day-sunny"} size="2x"/>;
}


const WeatherTemprature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }

        <span>{`${temperature } Cº`}</span>
</div>
)

WeatherTemprature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
}

export default WeatherTemprature;