import React from 'react';
import WeatherLocation from '../WeatherLocation2'

const LocationList = () =>(
    <div>
        <WeatherLocation city={"Santiago, cl"} />
        <WeatherLocation city={"Buenos Aires, ar"} />
        <WeatherLocation city={"Bogota, col"} />
        <WeatherLocation city={"Washington, us"} />
        <WeatherLocation city={"Barcelona, es"} />
    </div>
)

export default LocationList;