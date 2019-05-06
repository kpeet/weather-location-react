import React from 'react';
import Location from './WeatherLocation/Location'
import WeatherData from './WeatherLocation/WeatherData/index'

const WeatherLocation = () => (
                                <div>
                                    <Location city={"Barcelona"}>
                                    </Location>
                                    <WeatherData/>
                                </div>
                                );
export default WeatherLocation;





