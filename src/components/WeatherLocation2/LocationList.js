import React from 'react';
import WeatherLocation from '../WeatherLocation2'

const LocationList = () =>(
    <div>
        <WeatherLocation city={"Santiago, cl"} />
        <WeatherLocation city={"Buenos Aires, ar"} />
        <WeatherLocation city={"Bogota, col"} />
    </div>
)

export default LocationList;