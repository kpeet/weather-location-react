import React from 'react';


const WeatherExtraInfo = ({humidity, wind}) => (

    <div>
        <h1>Extra Info</h1>
        <span>{`${humidity} % - `}</span>
        <span>{`${wind} wind`}</span>
    </div>
);


export default WeatherExtraInfo;