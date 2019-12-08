import React from 'react';
import WeatherIcons from 'react-weathericons';
import {CLOUD, CLOUDY, RAIN, SNOW, SUN, WINDY} from "../../constants/weather";

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
    if(icon)

        return <WeatherIcons name={icon} size="2X "/>;
    else
        return <WeatherIcons name={"day-sunny"} size="2X "/>;
}

const WeatherTemprature = ({temperature, weatherState}) => (
    <div>
        {
            getWeatherIcon(weatherState)
        }

        <span>{`${temperature } Cº`}</span>
</div>
)

export default WeatherTemprature;